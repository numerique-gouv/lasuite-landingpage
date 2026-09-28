import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import {
  getSupportRecipient,
  isSupportConfigured,
} from '@/lib/support/recipients'

const deliverSchema = z.object({
  subject: z.string().trim().min(1),
  textBody: z.string().trim().min(1),
  email: z.email(),
  // Official support widget sends channel via X-Channel-ID and/or body.
  channel: z.string().trim().min(1).optional(),
  productName: z.string().trim().min(1).optional(),
  attachments: z
    .array(
      z.object({
        fileName: z.string().min(1),
        mimeType: z.string().min(1),
        data: z.string().min(1),
      })
    )
    .max(3)
    .optional()
    .default([]),
})

type DeliverResponse = { success: true } | { success: false; detail: string }

const getClientIp = (req: NextApiRequest): string => {
  const forwarded = req.headers['x-forwarded-for']
  if (forwarded) {
    return typeof forwarded === 'string'
      ? forwarded.split(',')[0].trim()
      : forwarded[0]
  }
  return req.socket.remoteAddress || 'unknown'
}

const allSubmitsByIp = new Map<string, number[]>()
const rateLimitWindow = 60 * 60 * 1000
const maxSubmitsPerWindow = 4

const trackIpSubmit = (ip: string): void => {
  const ipSubmits = allSubmitsByIp.get(ip) || []
  ipSubmits.push(Date.now())
  allSubmitsByIp.set(ip, ipSubmits)
}

const isRateLimited = (ip: string): boolean => {
  const ipSubmits = allSubmitsByIp.get(ip) || []
  const recentIpSubmits = ipSubmits.filter(
    (timestamp) => Date.now() - timestamp < rateLimitWindow
  )
  if (recentIpSubmits.length) {
    allSubmitsByIp.set(ip, recentIpSubmits)
  } else {
    allSubmitsByIp.delete(ip)
  }
  return recentIpSubmits.length >= maxSubmitsPerWindow
}

function parseBody(req: NextApiRequest): unknown {
  if (typeof req.body === 'string') {
    return JSON.parse(req.body)
  }
  return req.body
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeliverResponse>
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, X-Channel-ID'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      detail: 'Method not allowed.',
    })
  }

  if (!isSupportConfigured()) {
    return res.status(500).json({
      success: false,
      detail: 'Support is not configured on this environment.',
    })
  }

  let data: unknown
  try {
    data = parseBody(req)
  } catch {
    return res.status(400).json({
      success: false,
      detail: 'Invalid JSON body.',
    })
  }

  const parsed = deliverSchema.safeParse(data)
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      detail: 'Invalid form data.',
    })
  }

  const { subject, textBody, email, attachments, productName } = parsed.data
  const headerChannel =
    typeof req.headers['x-channel-id'] === 'string'
      ? req.headers['x-channel-id'].trim()
      : ''
  const channel = (parsed.data.channel || headerChannel).trim()
  if (!channel) {
    return res.status(400).json({
      success: false,
      detail: 'Missing support channel.',
    })
  }

  const recipient = getSupportRecipient(channel)
  if (!recipient) {
    return res.status(400).json({
      success: false,
      detail: 'Unknown support channel.',
    })
  }

  const clientIp = getClientIp(req)
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      detail: 'Too many requests. Please try again later.',
    })
  }
  trackIpSubmit(clientIp)

  const textContent = [
    'Nouveau message depuis le widget support La Suite.',
    '',
    `Channel: ${channel}`,
    ...(productName ? [`Produit: ${productName}`] : []),
    `Email: ${email}`,
    `IP: ${clientIp}`,
    '',
    textBody,
  ].join('\n')

  const productTag = productName || channel
  const brevoBody: Record<string, unknown> = {
    sender: {
      name: 'Site La Suite numérique',
      email: process.env.BREVO_SENDER_EMAIL,
    },
    to: [{ email: recipient }],
    replyTo: { email },
    subject: `[Support][${productTag}] ${subject}`,
    textContent,
  }

  if (attachments.length > 0) {
    brevoBody.attachment = attachments.map((file) => ({
      name: file.fileName,
      content: file.data,
    }))
  }

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
        'content-type': 'application/json',
      },
      body: JSON.stringify(brevoBody),
    })

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text()
      console.log(
        'Support deliver, Brevo error:',
        brevoResponse.status,
        brevoResponse.statusText,
        errorText
      )
      return res.status(502).json({
        success: false,
        detail: 'Unable to send your message. Please try again later.',
      })
    }
  } catch (error) {
    console.log('Support deliver, Brevo error:', error)
    return res.status(502).json({
      success: false,
      detail: 'Unable to send your message. Please try again later.',
    })
  }

  return res.status(200).json({ success: true })
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16mb',
    },
  },
}
