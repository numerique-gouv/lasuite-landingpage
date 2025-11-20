import { Button } from '@/components/Button'

export type ProConnectButtonProps = {
  onClick?: () => void
}
export const ProConnectButton = ({ onClick }: ProConnectButtonProps) => {
  return (
    <Button>
      <div className="proconnect-button" onClick={onClick} />
    </Button>
  )
}
