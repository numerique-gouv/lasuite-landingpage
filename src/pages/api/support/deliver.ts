import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import {
  clientAttachmentSchema,
  toMailportAttachments,
} from '@/lib/support/attachments'
import {
  getSupportRecipient,
  isSupportConfigured,
} from '@/lib/support/recipients'

const deliverSchema = z
  .object({
    subject: z.string().trim().min(1),
    textBody: z.string().trim().min(1),
    email: z.union([z.email(), z.literal('')]).optional(),
    channel: z.string().trim().min(1).optional(),
    productName: z.string().trim().min(1).optional(),
    altcha: z.string().trim().min(1),
    notify_sender: z.boolean().optional().default(true),
    attachments: z.array(clientAttachmentSchema).max(1).optional().default([]),
  })
  .superRefine((data, ctx) => {
    if (data.notify_sender && !data.email) {
      ctx.addIssue({
        code: 'custom',
        path: ['email'],
        message: 'Email is required when notify_sender is true.',
      })
    }
  })

type DeliverResponse = { success: true } | { success: false; detail: string }

function parseBody(req: NextApiRequest): unknown {
  if (typeof req.body === 'string') {
    return JSON.parse(req.body)
  }
  return req.body
}

function mailportUrl(path: string): string {
  const base = (process.env.MAILPORT_URL || '').replace(/\/+$/, '')
  return `${base}${path}`
}

function fail(
  res: NextApiResponse<DeliverResponse>,
  status: number,
  detail: string
) {
  return res.status(status).json({ success: false, detail })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeliverResponse>
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Channel-ID')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') {
    return fail(res, 405, 'Method not allowed.')
  }
  if (!isSupportConfigured()) {
    return fail(res, 500, 'Support is not configured on this environment.')
  }

  let data: unknown
  try {
    data = parseBody(req)
  } catch {
    return fail(res, 400, 'Invalid JSON body.')
  }

  const parsed = deliverSchema.safeParse(data)
  if (!parsed.success) {
    return fail(res, 400, 'Invalid form data.')
  }

  const headerChannel =
    typeof req.headers['x-channel-id'] === 'string'
      ? req.headers['x-channel-id'].trim()
      : ''
  const channel = (parsed.data.channel || headerChannel).trim()
  if (!channel) return fail(res, 400, 'Missing support channel.')

  const recipient = getSupportRecipient(channel)
  if (!recipient) return fail(res, 400, 'Unknown support channel.')

  const { subject, textBody, email, altcha, attachments, notify_sender } =
    parsed.data
  const userEmail = email?.trim() || ''
  const replyTo = userEmail || `noreply-${channel}@undisclosed.domain`
  const shouldNotify = notify_sender && !!userEmail

  const mailportBody: Record<string, unknown> = {
    to: recipient,
    subject,
    body: textBody,
    reply_to: replyTo,
    notify_sender: shouldNotify,
    altcha,
  }
  if (attachments.length > 0) {
    mailportBody.attachments = toMailportAttachments(attachments)
  }

  try {
    const mailportResponse = await fetch(mailportUrl('/send'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mailportBody),
    })

    if (mailportResponse.status === 202) {
      return res.status(200).json({ success: true })
    }

    let detail = 'Unable to send your message. Please try again later.'
    try {
      const errorBody = (await mailportResponse.json()) as { error?: string }
      if (errorBody.error) detail = errorBody.error
    } catch {
      // keep default
    }

    console.log(
      'Support deliver, mailport error:',
      mailportResponse.status,
      detail
    )

    if (mailportResponse.status === 429) {
      const retryAfter = mailportResponse.headers.get('Retry-After')
      if (retryAfter) res.setHeader('Retry-After', retryAfter)
      return fail(res, 429, 'Too many requests. Please try again later.')
    }

    if (mailportResponse.status === 400 || mailportResponse.status === 413) {
      return fail(res, 400, detail)
    }

    return fail(res, 502, detail)
  } catch (error) {
    console.log('Support deliver, mailport error:', error)
    return fail(
      res,
      502,
      'Unable to send your message. Please try again later.'
    )
  }
}

export const config = {
  api: {
    bodyParser: {
      // base64 overhead + mailport defaults (≤ 20 MB decoded total)
      sizeLimit: '28mb',
    },
  },
}
