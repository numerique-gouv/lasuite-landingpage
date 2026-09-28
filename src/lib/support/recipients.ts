import { SUPPORT_CHANNELS } from './channels'

/** Channel id → mailbox email (must also be in mailport's allowlist). */
export function getSupportRecipient(channel: string): string | null {
  return SUPPORT_CHANNELS[channel]?.trim() || null
}

export function isSupportConfigured(channel?: string): boolean {
  if (!process.env.MAILPORT_URL?.trim()) return false
  if (channel) return !!getSupportRecipient(channel)
  return Object.keys(SUPPORT_CHANNELS).length > 0
}
