import type { NextApiRequest, NextApiResponse } from 'next'
import { isSupportConfigured } from '@/lib/support/recipients'

type ConfigResponse =
  | { success: true; captcha: false; config: Record<string, never> }
  | { success: false; detail: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ConfigResponse>
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, X-Channel-ID'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'GET') {
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

  return res.status(200).json({
    success: true,
    captcha: false,
    config: {},
  })
}
