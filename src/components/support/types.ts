export type SupportChannel = string

export type SupportPanelProps = {
  channel: SupportChannel
  email?: string
  open: boolean
  onClose: () => void
}
