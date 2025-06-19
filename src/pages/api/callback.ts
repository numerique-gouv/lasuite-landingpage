import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { code, state, error } = req.query

    if (error) {
      throw new Error(`Erreur d'authentification: ${error}`)
    }

    if (!code) {
      throw new Error('Code d\'autorisation manquant')
    }

    // Échange du code contre un token
    const tokenResponse = await fetch(`${process.env.PROCONNECT_BASE_URL}/api/v2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code as string,
        client_id: process.env.PROCONNECT_CLIENT_ID!,
        client_secret: process.env.PROCONNECT_CLIENT_SECRET!,
        redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/callback`,
      }),
    })

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text()
      console.error('Erreur token response:', {
        status: tokenResponse.status,
        statusText: tokenResponse.statusText,
        body: errorText
      })
      throw new Error('Erreur lors de l\'échange du code')
    }

    const tokenData = await tokenResponse.json()
    console.log('Données de token reçues:', tokenData)

    // Stockage des tokens dans les cookies
    res.setHeader('Set-Cookie', [
      `access_token=${tokenData.access_token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
      `id_token=${tokenData.id_token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
      `refresh_token=${tokenData.refresh_token}; Path=/; HttpOnly; Secure; SameSite=Strict`
    ])

    // Redirection vers la page d'accueil
    res.redirect('/')
  } catch (error: any) {
    console.error('Erreur dans le callback:', error?.message)
    res.status(500).json({ 
      error: 'Erreur lors de l\'authentification',
      details: error?.message || 'Erreur inconnue'
    })
  }
} 