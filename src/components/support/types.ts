export type SupportChannel = string

export type SupportPanelProps = {
  channel: SupportChannel
  email?: string
  open: boolean
  onClose: () => void
  onOpen?: (dialog: HTMLDivElement) => void
  onSuccess?: () => void
  /**
   * API base ending with `/` (e.g. `https://lasuite.numerique.gouv.fr/api/support/`).
   * Defaults to same-origin `/api/support/`.
   */
  apiBase?: string
  /** Fixed panel position for embed (default: bottom-left like homepage). */
  position?: 'bottom-left' | 'bottom-right' | 'top-right'
}
