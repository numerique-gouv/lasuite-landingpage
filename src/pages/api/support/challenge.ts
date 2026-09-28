import type { NextApiRequest, NextApiResponse } from 'next'

/** Proxies mailport GET /challenge (same-origin for the ALTCHA widget). */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const base = (process.env.MAILPORT_URL || '').replace(/\/+$/, '')
  if (!base) {
    return res.status(500).json({ error: 'Support is not configured.' })
  }

  try {
    const upstream = await fetch(`${base}/challenge`)
    const body = await upstream.text()
    const contentType = upstream.headers.get('content-type')
    if (contentType) res.setHeader('Content-Type', contentType)
    return res.status(upstream.status).send(body)
  } catch (error) {
    console.log('Support challenge, mailport error:', error)
    return res.status(502).json({ error: 'Unable to fetch challenge.' })
  }
}
