import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!process.env.PROCONNECT_CLIENT_ID || !process.env.PROCONNECT_CLIENT_SECRET) {
      throw new Error('Configuration manquante : PROCONNECT_CLIENT_ID ou PROCONNECT_CLIENT_SECRET non définis')
    }

    const baseUrl = process.env.PROCONNECT_BASE_URL
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/callback`
    const state = Math.random().toString(36).substring(7)
    const nonce = Math.random().toString(36).substring(7)

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.PROCONNECT_CLIENT_ID,
      redirect_uri: redirectUri,
      scope: 'openid email given_name usual_name siret',
      state,
      nonce,
    })

    const authUrl = `${baseUrl}/api/v2/authorize?${params.toString()}`
    
    res.redirect(authUrl)
  } catch (error: any) {
    console.error('Erreur lors de l\'authentification:', error?.message)
    res.status(500).json({ 
      error: 'Erreur lors de l\'authentification',
      details: error?.message || 'Erreur inconnue'
    })
  }
} 