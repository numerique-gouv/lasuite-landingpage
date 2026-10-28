import { useState } from 'react'
import { useTranslations } from '@/locales/useTranslations'
import { SupportPanel } from './SupportPanel'
import type { SupportChannel } from './types'

type SupportButtonProps = {
  channel: SupportChannel
  email?: string
  className?: string
}

export const SupportButton = ({
  channel,
  email,
  className,
}: SupportButtonProps) => {
  const t = useTranslations()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ||
          'border-grey-1 hover:underline hover:decoration-2 hover:underline-offset-4 transition ease-in-out delay-50 duration-300 hover:cursor-pointer'
        }
      >
        {t('support.footer_link')}
      </button>
      <SupportPanel
        channel={channel}
        email={email}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
