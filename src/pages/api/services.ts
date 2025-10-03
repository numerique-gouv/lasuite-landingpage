import type { NextApiRequest, NextApiResponse } from 'next'

interface Service {
  id: number
  name: string
  url: string
  maturity: 'alpha' | 'beta' | 'stable'
  logo: string | null
}

interface ServicesResponse {
  services: Service[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServicesResponse>
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ services: [] })
  }

  const services: Service[] = [
    {
      id: 1,
      name: 'Tchap',
      url: 'https://tchap.numerique.gouv.fr',
      maturity: 'stable',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/tchap.svg',
    },
    {
      id: 2,
      name: 'Docs',
      url: 'https://docs.numerique.gouv.fr/',
      maturity: 'stable',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/docs.svg',
    },
    {
      id: 3,
      name: 'Visio',
      url: 'https://visio.numerique.gouv.fr/',
      maturity: 'beta',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/visio.svg',
    },
    {
      id: 4,
      name: 'Fichiers',
      url: 'https://fichiers.numerique.gouv.fr/',
      maturity: 'alpha',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/fichiers.svg',
    },
    {
      id: 5,
      name: 'Grist',
      url: 'https://grist.numerique.gouv.fr/',
      maturity: 'stable',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/grist.svg',
    },
    {
      id: 6,
      name: 'Fr. Transfert',
      url: 'https://francetransfert.numerique.gouv.fr/',
      maturity: 'stable',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/france_transfert.svg',
    },
    {
      id: 7,
      name: 'Resana',
      url: 'https://resana.numerique.gouv.fr/',
      maturity: 'stable',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/resana.svg',
    },
    {
      id: 8,
      name: 'RDV',
      url: 'https://rdv.anct.gouv.fr/',
      maturity: 'stable',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/rdv.svg',
    },
    {
      id: 9,
      name: 'Démarches',
      url: 'https://www.demarches-simplifiees.fr/',
      maturity: 'stable',
      logo: 'https://lasuite.numerique.gouv.fr/assets/products/demarches.svg',
    },
  ]

  return res.status(200).json({ services })
}
