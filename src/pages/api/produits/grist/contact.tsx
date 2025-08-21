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
  const validConfigs = {
    grist: !!process.env.GRIST_CONTACT_DOC_URL && !!process.env.GRIST_API_KEY,
    brevo:
      !!process.env.BREVO_API_KEY &&
      !!process.env.BREVO_SENDER_EMAIL &&
      !!process.env.GRIST_CONTACT_EMAIL_RECIPIENT,
  }

  const errorResponse = () =>
    res.status(500).json({
      status: 'error',
      errors: {
        message: {
          errors: [
            "Erreur lors de l'envoi du message, réessayez ultérieurement. Veuillez nous excuser pour la gêne occasionnée.",
          ],
        },
      },
    })

  // if no config is setup to save the contact, return an error
  if (Object.values(validConfigs).every((value) => !value)) {
    return errorResponse()
  }

  const data = JSON.parse(req.body)
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return res.status(400).json({
      status: 'error',
      errors: z.treeifyError(parsed.error).properties,
    })
  }

  // a "name" field is sent as a honeypot field, it should be empty
  const isCertainlySpam = !!data.name

  const validCalls = {
    grist: validConfigs.grist,
    brevo: validConfigs.brevo,
  }

  // fill the grist doc
  if (validConfigs.grist) {
    const api = new GristDocAPI(process.env.GRIST_CONTACT_DOC_URL as string)
    try {
      await api.addRecords(
        isCertainlySpam
          ? 'Contacts_spam_site_La_Suite'
          : 'Contacts_site_La_Suite',
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
    } catch (error) {
      if ((error as any).response?.data?.error) {
        console.log(
          'Grist contact form, GristAPI.addRecords call error:',
          (error as any).response.data.error
        )
      }
      validCalls.grist = false
    }
  }

  // send an email to the team if it's not spam
  if (!isCertainlySpam && validConfigs.brevo) {
    const fromName = [parsed.data.firstname || '', parsed.data.lastname || '']
      .filter(Boolean)
      .join(' ')
    const fromOrg = parsed.data.org || ''
    const fromTitle = parsed.data.title || ''

    const contactInfo = [
      fromName,
      parsed.data.email,
      (fromOrg && `Organisation : ${fromOrg}`) || '',
      (fromTitle && `Poste : ${fromTitle}`) || '',
    ]
      .filter(Boolean)
      .join('\n')

    let subjectContactInfo = [fromName, fromOrg].filter(Boolean).join(' - ')
    if (!subjectContactInfo.length) {
      subjectContactInfo = parsed.data.email
    }

    try {
      const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api-key': process.env.BREVO_API_KEY as string,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: {
            name: 'Site La Suite numérique',
            email: process.env.BREVO_SENDER_EMAIL as string,
          },
          to: [{ email: process.env.GRIST_CONTACT_EMAIL_RECIPIENT as string }],
          replyTo: {
            email: parsed.data.email,
          },
          subject: `[Contact Grist] ${subjectContactInfo}`,
          textContent: `Nouveau contact depuis le site La Suite numérique :\n\n${contactInfo}\n\n${parsed.data.message}`,
        }),
      })
      if (!brevoResponse.ok) {
        console.log(
          'Grist contact form, Brevo SMTP API call error:',
          brevoResponse.statusText
        )
        validCalls.brevo = false
      }
    } catch (error) {
      if ((error as any).toString) {
        console.log(
          'Grist contact form, Brevo SMTP API call error:',
          (error as any).toString()
        )
      }
      validCalls.brevo = false
    }
  }

  // if we didn't manage to get the info with either service, warn the user
  if (Object.values(validCalls).every((value) => !value)) {
    return errorResponse()
  }

  return res.status(200).json({ status: 'success' })
}
