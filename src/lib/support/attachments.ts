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
  'text/plain',
] as const
export const ALLOWED_ATTACHMENT_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.txt',
] as const

/** Value for `<input accept>` — extensions + MIME for native file picker. */
export const ATTACHMENT_ACCEPT = [
  ...ALLOWED_ATTACHMENT_EXTENSIONS,
  ...ALLOWED_ATTACHMENT_TYPES,
].join(',')

export function isAllowedAttachment(file: {
  name: string
  type: string
}): boolean {
  const mime = file.type.toLowerCase()
  if (
    mime &&
    ALLOWED_ATTACHMENT_TYPES.includes(
      mime as (typeof ALLOWED_ATTACHMENT_TYPES)[number]
    )
  ) {
    return true
  }
  const lower = file.name.toLowerCase()
  return ALLOWED_ATTACHMENT_EXTENSIONS.some((ext) => lower.endsWith(ext))
}

export function resolveAttachmentMimeType(file: {
  name: string
  type: string
}): string {
  const mime = file.type.toLowerCase()
  if (
    mime &&
    ALLOWED_ATTACHMENT_TYPES.includes(
      mime as (typeof ALLOWED_ATTACHMENT_TYPES)[number]
    )
  ) {
    return mime
  }
  const lower = file.name.toLowerCase()
  if (lower.endsWith('.png')) return 'image/png'
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg'
  if (lower.endsWith('.gif')) return 'image/gif'
  if (lower.endsWith('.txt')) return 'text/plain'
  return mime || 'application/octet-stream'
}

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
