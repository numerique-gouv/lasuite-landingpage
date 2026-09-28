import { useEffect, useId, useRef, useState } from 'react'
import { Button } from '@/components/ui-kit-v2/Button'
import { useTranslations } from '@/locales/useTranslations'
import type { SupportPanelProps } from './types'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export const SupportPanel = ({
  channel,
  email: emailFromProps,
  open,
  onClose,
}: SupportPanelProps) => {
  const t = useTranslations()
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState(emailFromProps || '')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorDetail, setErrorDetail] = useState('')

  useEffect(() => {
    if (!open) return
    setFormState('idle')
    setErrorDetail('')
    const timer = window.setTimeout(() => subjectRef.current?.focus(), 0)
    return () => window.clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (formState === 'submitting') return
    setErrorDetail('')
    setFormState('submitting')

    const payload = {
      subject: subject.trim(),
      textBody: message.trim(),
      email: (emailFromProps || email).trim(),
      channel,
      attachments: [] as [],
    }

    try {
      const response = await fetch('/api/support/deliver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Channel-ID': channel,
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!data.success) {
        throw new Error(data.detail || t('support.error'))
      }
      setFormState('success')
      setSubject('')
      setMessage('')
      if (!emailFromProps) setEmail('')
    } catch (error) {
      setFormState('error')
      setErrorDetail(
        error instanceof Error ? error.message : t('support.error')
      )
    }
  }

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed z-[1000] inset-0 w-full max-w-none max-h-none rounded-none overflow-auto bg-white text-left shadow-none md:inset-auto md:bottom-5 md:left-5 md:right-auto md:top-auto md:w-[min(400px,calc(100vw-24px))] md:max-h-[calc(100vh-40px)] md:rounded-xl md:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.12)]"
    >
      <div className="flex items-start justify-between gap-3 px-5 pt-5">
        <div className="min-w-0 flex-1">
          <h2
            id={titleId}
            className="m-0 text-xl font-bold leading-tight text-greyscale-950"
          >
            {t('support.title')}
          </h2>
          <p className="mt-2 mb-0 text-[13px] leading-snug text-greyscale-500">
            {t('support.subtitle')}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('support.close')}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-greyscale-500 hover:bg-greyscale-050 hover:text-greyscale-950"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>
      </div>

      <div className="px-5 pb-5 pt-4">
        {formState === 'success' ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div
              aria-hidden="true"
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#27a658] text-xl font-bold text-white"
            >
              ✔
            </div>
            <p className="m-0 mb-2 text-[15px] font-medium text-[#0f4e27]">
              {t('support.success')}
            </p>
            <p className="m-0 text-[15px] font-medium text-[#0f4e27]">
              {t('support.success_secondary')}
            </p>
            <div className="mt-6">
              <Button type="button" variant="primary_brand" onClick={onClose}>
                {t('common.close')}
              </Button>
            </div>
          </div>
        ) : (
          <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
            {!emailFromProps && (
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="support-email"
                  className="text-sm font-medium leading-[18px]"
                >
                  {t('support.email_label')}
                </label>
                <p className="m-0 mb-1.5 text-xs font-normal leading-4 text-greyscale-500">
                  {t('support.email_hint')}
                </p>
                <input
                  id="support-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-greyscale-150 bg-transparent px-3 py-2.5 text-sm text-greyscale-950 outline-none focus:border-brand-550 focus:shadow-[0_0_0_1px_#3e5de7]"
                />
              </div>
            )}

            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="support-subject"
                className="text-sm font-medium leading-[18px]"
              >
                {t('support.subject_label')}
              </label>
              <p className="m-0 mb-1.5 text-xs font-normal leading-4 text-greyscale-500">
                {t('support.subject_hint')}
              </p>
              <input
                ref={subjectRef}
                id="support-subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded border border-greyscale-150 bg-transparent px-3 py-2.5 text-sm text-greyscale-950 outline-none focus:border-brand-550 focus:shadow-[0_0_0_1px_#3e5de7]"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="support-message"
                className="text-sm font-medium leading-[18px]"
              >
                {t('support.message_label')}
              </label>
              <p className="m-0 mb-1.5 text-xs font-normal leading-4 text-greyscale-500">
                {t('support.message_hint')}
              </p>
              <textarea
                id="support-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-24 w-full resize-y rounded border border-greyscale-150 bg-transparent px-3 py-2.5 text-sm text-greyscale-950 outline-none focus:border-brand-550 focus:shadow-[0_0_0_1px_#3e5de7]"
              />
            </div>

            {errorDetail && (
              <p className="m-0 text-[13px] text-[#ce0500]" role="alert">
                {errorDetail}
              </p>
            )}

            <div className="mt-1 flex justify-end gap-2">
              <Button
                type="button"
                variant="tertiary_brand_bordered"
                onClick={onClose}
                className="!min-w-10 !flex-1"
              >
                {t('support.cancel')}
              </Button>
              <Button
                type="submit"
                variant="primary_brand"
                className={`!min-w-10 !flex-1${
                  formState === 'submitting' ? ' !opacity-55 !pointer-events-none' : ''
                }`}
              >
                {formState === 'submitting'
                  ? t('support.sending')
                  : t('support.send')}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
