import { z } from 'zod'

/** Server-side validation for client attachment payloads. */
export const clientAttachmentSchema = z.object({
  fileName: z.string().trim().min(1),
  mimeType: z.string().trim().min(1),
  data: z.string().min(1),
})
