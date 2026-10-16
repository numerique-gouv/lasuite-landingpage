import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Button } from '@/components/ui-kit-v2/Button'
import { useTranslations } from '@/locales/useTranslations'
import type { ClientAttachment } from '@/lib/support/attachments'
import { AltchaWidget } from './AltchaWidget'
import { SupportAttachments } from './SupportAttachments'
import type { SupportPanelProps } from './types'

type FormState = 'idle' | 'submitting' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const SupportPanel = ({
  channel,
  email: emailFromProps,
  open,
  onClose,
  onSuccess,
}: SupportPanelProps) => {
  const t = useTranslations()
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState(emailFromProps || '')
  const [wantReply, setWantReply] = useState(true)
  const [emailTouched, setEmailTouched] = useState(false)
  const [attachments, setAttachments] = useState<ClientAttachment[]>([])
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorDetail, setErrorDetail] = useState('')
  const [altchaPayload, setAltchaPayload] = useState('')
  // Remount ALTCHA after each attempt — challenges are single-use.
  const [altchaKey, setAltchaKey] = useState(0)

  const onAltchaPayloadChange = useCallback((payload: string) => {
    setAltchaPayload(payload)
  }, [])

  useEffect(() => {
    if (!open) return
    setFormState('idle')
    setErrorDetail('')
    setAltchaPayload('')
    setAttachments([])
    setWantReply(true)
    setEmailTouched(false)
    setEmail(emailFromProps || '')
    setAltchaKey((key) => key + 1)
    const timer = window.setTimeout(() => subjectRef.current?.focus(), 0)
    return () => window.clearTimeout(timer)
  }, [open, emailFromProps])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  const resolvedEmail = (emailFromProps || email).trim()
  const showEmailField = !emailFromProps && wantReply
  const emailInvalid =
    showEmailField && emailTouched && !EMAIL_RE.test(resolvedEmail)
  const canSubmit =
    subject.trim().length > 0 &&
    message.trim().length > 0 &&
    !!altchaPayload &&
    formState !== 'submitting' &&
    (emailFromProps || (wantReply && EMAIL_RE.test(resolvedEmail)))

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit) return

    setErrorDetail('')
    setFormState('submitting')

    const formData = new FormData(event.currentTarget)
    const altchaFromForm = String(formData.get('altcha') || '').trim()
    const altcha = altchaFromForm || altchaPayload.trim()
    if (!altcha) {
      setFormState('error')
      setErrorDetail(t('support.altcha_required'))
      setAltchaPayload('')
      setAltchaKey((key) => key + 1)
      return
    }

    const payload = {
      subject: subject.trim(),
      textBody: message.trim(),
      email: resolvedEmail,
      channel,
      altcha,
      notify_sender: wantReply,
      attachments,
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
      setSubject('')
      setMessage('')
      setAltchaPayload('')
      setAttachments([])
      setWantReply(true)
      setEmailTouched(false)
      if (!emailFromProps) setEmail('')
      formRef.current?.reset()
      setFormState('idle')
      onSuccess?.()
      onClose()
    } catch (error) {
      setFormState('error')
      setErrorDetail(
        error instanceof Error ? error.message : t('support.error')
      )
      setAltchaPayload('')
      setAltchaKey((key) => key + 1)
    }
  }

  const inputClass =
    'w-full rounded border border-[#cbcfd8] bg-transparent px-3 py-2.5 text-sm text-greyscale-950 outline-none focus:border-brand-550 focus:shadow-[0_0_0_1px_#3e5de7]'
  const inputErrorClass =
    'w-full rounded border border-[#ce0500] bg-transparent px-3 py-2.5 pr-10 text-sm text-greyscale-950 outline-none focus:border-[#ce0500] focus:shadow-[0_0_0_1px_#ce0500]'

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed z-[1000] inset-0 w-full max-w-none max-h-none rounded-none overflow-auto bg-white text-left shadow-none md:inset-auto md:bottom-5 md:left-5 md:right-auto md:top-auto md:w-[min(400px,calc(100vw-24px))] md:max-h-[calc(100vh-40px)] md:rounded-lg md:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.12)]"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t('support.close')}
        className="absolute right-[6px] top-[6px] z-10 flex h-7 w-7 items-center justify-center rounded-md hover:bg-greyscale-050"
      >
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 3.5 3.5 12.5M3.5 3.5l9 9"
            stroke="#626A80"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="px-5 pt-5 pr-10">
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

      <div className="px-5 pb-5 pt-4">
        <form
          ref={formRef}
          className="flex flex-col gap-3.5"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="support-subject"
              className="text-sm font-medium leading-[18px]"
            >
              {t('support.subject_label')}
            </label>
            <input
              ref={subjectRef}
              id="support-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="support-message"
              className="text-sm font-medium leading-[18px]"
            >
              {t('support.message_label')}
            </label>
            <textarea
              id="support-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`min-h-24 resize-y ${inputClass}`}
            />
          </div>

          <SupportAttachments
            attachments={attachments}
            onChange={setAttachments}
            onError={setErrorDetail}
            disabled={formState === 'submitting'}
          />

          {!emailFromProps && (
            <>
              <label className="flex cursor-pointer items-start gap-2 text-sm text-greyscale-950">
                <input
                  type="checkbox"
                  checked={wantReply}
                  onChange={(e) => {
                    setWantReply(e.target.checked)
                    if (!e.target.checked) {
                      setEmailTouched(false)
                      setEmail('')
                    }
                  }}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-brand-550"
                />
                <span>{t('support.reply_checkbox')}</span>
              </label>

              {showEmailField && (
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="support-email"
                    className="text-sm font-medium leading-[18px]"
                  >
                    {t('support.email_label')}
                  </label>
                  <div className="relative">
                    <input
                      id="support-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setEmailTouched(true)}
                      aria-invalid={emailInvalid}
                      className={emailInvalid ? inputErrorClass : inputClass}
                    />
                    {emailInvalid && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#ce0500] text-[11px] font-bold text-white"
                      >
                        !
                      </span>
                    )}
                  </div>
                  {emailInvalid && (
                    <p
                      className="m-0 mt-1 text-[13px] text-[#ce0500]"
                      role="alert"
                    >
                      {t('support.email_invalid')}
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          <AltchaWidget
            remountKey={altchaKey}
            onPayloadChange={onAltchaPayloadChange}
          />

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
                !canSubmit ? ' !opacity-55 !pointer-events-none' : ''
              }`}
            >
              {formState === 'submitting'
                ? t('support.sending')
                : t('support.send')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
