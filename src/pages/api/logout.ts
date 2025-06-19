import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Suppression des cookies
    res.setHeader('Set-Cookie', [
      'access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
      'id_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
      'refresh_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
    ])

    // Construction de l'URL de déconnexion ProConnect
    const baseUrl = process.env.PROCONNECT_BASE_URL || 'https://fca.integ01.dev-agentconnect.fr'
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/callback`
    const logoutUrl = `${baseUrl}/logout?post_logout_redirect_uri=${redirectUri}`

    console.log('URL de déconnexion:', logoutUrl)
    
    // Redirection vers l'endpoint de déconnexion de ProConnect
    res.redirect(logoutUrl)
  } catch (error: any) {
    console.error('Erreur lors de la déconnexion:', error?.message)
    res.status(500).json({ 
      error: 'Erreur lors de la déconnexion',
      details: error?.message || 'Erreur inconnue'
    })
  }
} 