import { z } from 'zod'

/** Client / widget shape (also used by public/widgets/support.js). */
export const clientAttachmentSchema = z.object({
  fileName: z.string().trim().min(1),
  mimeType: z.string().trim().min(1),
  data: z.string().min(1),
})

export type ClientAttachment = z.infer<typeof clientAttachmentSchema>

/** Mailport POST /send attachment shape. */
export type MailportAttachment = {
  filename: string
  content_type: string
  content_base64: string
}

export const MAX_ATTACHMENTS = 1
export const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024
export const ALLOWED_ATTACHMENT_TYPES = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'application/pdf',
  'text/plain',
] as const

const DATA_URL_PREFIX = /^data:[^;]+;base64,/i

function stripDataUrlPrefix(value: string): string {
  return value.replace(DATA_URL_PREFIX, '')
}

export function toMailportAttachments(
  attachments: ClientAttachment[]
): MailportAttachment[] {
  return attachments.map((file) => ({
    filename: file.fileName,
    content_type: file.mimeType,
    content_base64: stripDataUrlPrefix(file.data),
  }))
}

export function truncateFileName(name: string, max = 18): string {
  if (name.length <= max) return name
  const dot = name.lastIndexOf('.')
  const ext = dot > 0 ? name.slice(dot) : ''
  const keep = Math.max(8, max - ext.length - 1)
  return `${name.slice(0, keep)}…${ext}`
}

export function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result
      if (typeof result !== 'string') {
        reject(new Error('Unable to read file'))
        return
      }
      resolve(stripDataUrlPrefix(result))
    }
    reader.onerror = () => reject(new Error('Unable to read file'))
    reader.readAsDataURL(file)
  })
}
