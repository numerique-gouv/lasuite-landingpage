import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const accessToken = req.cookies.access_token

    if (!accessToken) {
      return res.status(401).json({ error: 'Non authentifié' })
    }

    const userInfoUrl = `${process.env.PROCONNECT_BASE_URL}/api/v2/userinfo`
    console.log('Requête userinfo vers:', userInfoUrl)
    
    const userResponse = await fetch(userInfoUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/jwt',
        'Authorization': `Bearer ${accessToken}`,
      },
    })

    if (!userResponse.ok) {
      const errorText = await userResponse.text()
      console.error('Erreur userinfo response:', {
        status: userResponse.status,
        statusText: userResponse.statusText,
        body: errorText,
        headers: Object.fromEntries(userResponse.headers.entries())
      })
      return res.status(userResponse.status).json({ error: 'Erreur lors de la récupération des informations utilisateur' })
    }

    // La réponse est un JWT
    const userInfoJwt = await userResponse.text()
    console.log('JWT userinfo reçu:', userInfoJwt)

    const [, payloadBase64] = userInfoJwt.split('.')
    const payload = JSON.parse(Buffer.from(payloadBase64, 'base64').toString())

    res.status(200).json(payload)
  } catch (error: any) {
    console.error('Erreur dans /api/me:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
} 