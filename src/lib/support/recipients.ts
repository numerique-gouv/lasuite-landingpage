import { SUPPORT_CHANNELS } from './channels'

/**
 * Resolves a support widget channel to its FreeScout mailbox email.
 * Mapping lives in `channels.ts` (versioned, not secret).
 */
export function getSupportRecipient(channel: string): string | null {
  const email = SUPPORT_CHANNELS[channel]?.trim()
  return email || null
}

export function isSupportConfigured(channel?: string): boolean {
  const hasBrevo =
    !!process.env.BREVO_API_KEY && !!process.env.BREVO_SENDER_EMAIL
  if (!hasBrevo) return false
  if (channel) return !!getSupportRecipient(channel)
  return Object.keys(SUPPORT_CHANNELS).length > 0
}
