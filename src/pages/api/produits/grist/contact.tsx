import { GristDocAPI } from 'grist-api'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const contactSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  email: z
    .email({
      message: 'Format incorrect. Exemple : julie@gouvernement.fr.',
    })
    .min(1, {
      message: 'Ce champ doit être rempli.',
    }),
  org: z.string().optional(),
  title: z.string().min(1, { message: 'Ce champ doit être rempli.' }),
  message: z.string().min(1, { message: 'Ce champ doit être rempli.' }),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.GRIST_CONTACT_DOC_URL || !process.env.GRIST_API_KEY) {
    return res.status(500).json({
      status: 'error',
      errors: {
        message: "Le serveur d'envoi n'est pas configuré.",
      },
    })
  }

  const data = JSON.parse(req.body)
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return res.status(400).json({
      status: 'error',
      errors: z.treeifyError(parsed.error).properties,
    })
  }

  const api = new GristDocAPI(process.env.GRIST_CONTACT_DOC_URL)
  // a "name" field is sent as a honeypot field, it should be empty
  const isCertainlySpam = !!data.name
  await api.addRecords(
    isCertainlySpam ? 'Contacts_spam_site_La_Suite' : 'Contacts_site_La_Suite',
    [
      {
        Prenom: parsed.data.firstname || '',
        Nom: parsed.data.lastname || '',
        Email: parsed.data.email,
        Organisation: parsed.data.org || '',
        Poste: parsed.data.title || '',
        Message: parsed.data.message,
      },
    ]
  )
  return res.status(200).json({ status: 'success' })
}
