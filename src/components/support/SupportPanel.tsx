import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Button } from '@/components/ui-kit-v2/Button'
import { useTranslations } from '@/locales/useTranslations'
import type { ClientAttachment } from '@/lib/support/attachments'
import { AltchaWidget, type AltchaWidgetHandle } from './AltchaWidget'
import { SupportAttachments } from './SupportAttachments'
import { SupportField } from './SupportField'
import type { SupportPanelProps } from './types'

type FormState = 'idle' | 'submitting' | 'error' | 'success'

type FieldErrors = {
  subject: string | null
  message: string | null
  email: string | null
}

const EMPTY_FIELD_ERRORS: FieldErrors = {
  subject: null,
  message: null,
  email: null,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_SENDING_MS = 1500

function delay(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

const FOCUSABLES = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

function ensureTrailingSlash(url: string) {
  return url.endsWith('/') ? url : `${url}/`
}

function getFocusableElements(container: HTMLElement) {
  return [...container.querySelectorAll<HTMLElement>(FOCUSABLES)].filter(
    (el) =>
      el.checkVisibility ? el.checkVisibility() : el.getClientRects().length > 0
  )
}

function SuccessImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <defs>
        <linearGradient
          id="bubbleFill"
          x1="40"
          x2="40"
          y1="14.75"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF"></stop>
          <stop offset="1" stopColor="#F6F8F9"></stop>
        </linearGradient>
        <linearGradient
          id="bubbleStroke"
          x1="40"
          x2="40"
          y1="15"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#dbdee3"></stop>
          <stop offset="1" stopColor="#dbdee3"></stop>
        </linearGradient>
        <filter
          id="shadow"
          width="92"
          height="92"
          x="-6"
          y="-4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="blur"
            stdDeviation="3"
          ></feGaussianBlur>
          <feOffset dy="2" in="blur" result="offset"></feOffset>
          <feComponentTransfer in="offset" result="shadow">
            <feFuncA slope="0.05" type="linear"></feFuncA>
          </feComponentTransfer>
          <feFlood floodColor="#181B24" result="shadowColor"></feFlood>
          <feComposite
            in="shadowColor"
            in2="shadow"
            operator="in"
            result="coloredShadow"
          ></feComposite>
          <feMerge>
            <feMergeNode in="coloredShadow"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <path
          fill="url(#bubbleFill)"
          stroke="url(#bubbleStroke)"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M51.185 65.248q1.16 0 1.81-.743.65-.742.65-2.019v-6.59h2.111q3.225 0 5.709-1.37 2.46-1.369 3.875-3.921 1.392-2.552 1.392-6.08V26.146q0-3.527-1.369-6.08a9.43 9.43 0 0 0-3.898-3.921q-2.553-1.393-6.103-1.393H24.638q-3.551 0-6.103 1.393a9.26 9.26 0 0 0-3.899 3.922q-1.37 2.552-1.369 6.08v18.378q0 3.528 1.37 6.08a9.26 9.26 0 0 0 3.898 3.922q2.552 1.368 6.103 1.369h14.665l8.703 7.727q.95.86 1.67 1.23.72.395 1.509.395Z"
        ></path>
        <path
          fill="#c6cbd3"
          d="M20.168 24.841c0-.982.796-1.777 1.778-1.777h36.11a1.778 1.778 0 1 1 0 3.555h-36.11a1.78 1.78 0 0 1-1.778-1.778m0 5.334c0-.982.796-1.778 1.778-1.778h36.11a1.778 1.778 0 1 1 0 3.555h-36.11a1.78 1.78 0 0 1-1.778-1.777m0 5.333c0-.982.796-1.778 1.778-1.778h36.11a1.778 1.778 0 0 1 0 3.556h-36.11a1.78 1.78 0 0 1-1.778-1.778m0 5.333c0-.982.796-1.778 1.778-1.778h14.11a1.778 1.778 0 1 1 0 3.556h-14.11a1.78 1.78 0 0 1-1.778-1.778"
        ></path>
      </g>
    </svg>
  )
}

function SupportSuccess({
  titleId,
  onClose,
}: {
  titleId: string
  onClose: () => void
}) {
  const t = useTranslations()
  const actionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.setTimeout(() => {
      actionsRef.current?.querySelector('button')?.focus()
    }, 0)
  }, [])

  return (
    <div className="flex flex-col items-center px-5 pb-5 pt-10 text-center">
      <div className="flex flex-col items-center">
        <SuccessImage />
        <h2
          id={titleId}
          className="m-0 mt-4 text-lg font-bold leading-tight text-greyscale-950"
        >
          {t('support.success_title')}
        </h2>
        <p className="mt-2 mb-2 text-sm leading-snug text-greyscale-500">
          {t('support.success_text')}
        </p>
      </div>
      <div ref={actionsRef} className="mt-6 w-full">
        <Button
          type="button"
          variant="secondary_brand"
          onClick={onClose}
          aria-describedby={titleId}
          fullWidth
        >
          {t('support.success_close')}
        </Button>
      </div>
    </div>
  )
}

export const SupportPanel = ({
  channel,
  email: emailFromProps,
  open,
  onClose,
  onOpen,
  onSuccess,
  apiBase = '/api/support/',
  position = 'bottom-left',
}: SupportPanelProps) => {
  const t = useTranslations()
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const altchaRef = useRef<AltchaWidgetHandle>(null)
  const api = ensureTrailingSlash(apiBase)
  const isAbsoluteApi = /^https?:\/\//i.test(api)
  const challengeUrl = `${api}challenge`
  const deliverUrl = `${api}deliver/`
  const scryptWorkerUrl = isAbsoluteApi
    ? `${new URL(api).origin}/altcha/workers/scrypt.js`
    : '/altcha/workers/scrypt.js'

  const propsEmail = (emailFromProps || '').trim()
  const trustedEmailFromProps = EMAIL_RE.test(propsEmail) ? propsEmail : ''
  const showEmailField = !trustedEmailFromProps

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors>(EMPTY_FIELD_ERRORS)
  const [attachments, setAttachments] = useState<ClientAttachment[]>([])
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorDetail, setErrorDetail] = useState('')
  const [altchaPayload, setAltchaPayload] = useState('')
  // Remount ALTCHA after each attempt — challenges are single-use.
  const [altchaKey, setAltchaKey] = useState(0)
  const submitAttempt = useRef(0)

  const onAltchaPayloadChange = useCallback((payload: string) => {
    setAltchaPayload(payload)
  }, [])

  useEffect(() => {
    if (!open) {
      submitAttempt.current += 1
      setFormState('idle')
      return
    }
    setFormState('idle')
    setErrorDetail('')
    setAltchaPayload('')
    setAttachments([])
    setFieldErrors(EMPTY_FIELD_ERRORS)
    setEmail('')
    setAltchaKey((key) => key + 1)
    const timer = window.setTimeout(() => subjectRef.current?.focus(), 0)
    return () => window.clearTimeout(timer)
  }, [open, emailFromProps])

  useEffect(() => {
    if (!open || !panelRef.current) return
    onOpen?.(panelRef.current)
  }, [open, onOpen])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const container = panelRef.current
      if (!container) return

      const focusable = getFocusableElements(container)
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const root = container.getRootNode()
      const active =
        (root instanceof Document || root instanceof ShadowRoot
          ? root.activeElement
          : null) || document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  const resolvedEmail = showEmailField ? email.trim() : trustedEmailFromProps

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formState === 'submitting') return

    const subjectOk = subject.trim().length > 0
    const messageOk = message.trim().length > 0
    const emailOk = EMAIL_RE.test(resolvedEmail)
    const nextErrors: FieldErrors = {
      subject: subjectOk ? null : t('support.subject_required'),
      message: messageOk ? null : t('support.message_required'),
      email:
        !showEmailField || emailOk
          ? null
          : resolvedEmail
            ? t('support.email_invalid')
            : t('support.email_required'),
    }
    setFieldErrors(nextErrors)

    const firstInvalid = (
      [
        { ok: subjectOk, el: subjectRef.current },
        { ok: messageOk, el: messageRef.current },
        ...(showEmailField ? [{ ok: emailOk, el: emailRef.current }] : []),
      ] as const
    ).find((field) => !field.ok)
    if (firstInvalid) {
      firstInvalid.el?.focus()
      return
    }

    const attempt = ++submitAttempt.current
    const sendingStartedAt = Date.now()
    const ensureMinimumSending = async () => {
      const remaining = MIN_SENDING_MS - (Date.now() - sendingStartedAt)
      if (remaining > 0) await delay(remaining)
    }

    setErrorDetail('')
    setFormState('submitting')

    const formData = new FormData(event.currentTarget)
    const altchaFromForm = String(formData.get('altcha') || '').trim()
    const altcha =
      altchaFromForm ||
      altchaPayload.trim() ||
      (await altchaRef.current?.verify()) ||
      ''
    if (!altcha) {
      await ensureMinimumSending()
      if (attempt !== submitAttempt.current) return
      setFormState('error')
      setErrorDetail(t('support.altcha_required'))
      setAltchaPayload('')
      setAltchaKey((key) => key + 1)
      window.setTimeout(() => {
        panelRef.current?.querySelector<HTMLElement>('altcha')?.focus?.()
      }, 0)
      return
    }

    const payload = {
      subject: subject.trim(),
      textBody: message.trim(),
      email: resolvedEmail,
      channel,
      altcha,
      notify_sender: true,
      attachments,
    }

    try {
      const response = await fetch(deliverUrl, {
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
      await ensureMinimumSending()
      if (attempt !== submitAttempt.current) return
      setSubject('')
      setMessage('')
      setAltchaPayload('')
      setAttachments([])
      setFieldErrors(EMPTY_FIELD_ERRORS)
      setEmail('')
      formRef.current?.reset()
      setFormState('success')
      onSuccess?.()
    } catch (error) {
      await ensureMinimumSending()
      if (attempt !== submitAttempt.current) return
      setFormState('error')
      setErrorDetail(
        error instanceof Error ? error.message : t('support.error')
      )
      setAltchaPayload('')
      setAltchaKey((key) => key + 1)
    }
  }

  const positionClass =
    position === 'top-right'
      ? 'md:inset-auto md:top-20 md:right-5 md:bottom-auto md:left-auto'
      : position === 'bottom-right'
        ? 'md:inset-auto md:bottom-5 md:right-5 md:left-auto md:top-auto'
        : 'md:inset-auto md:bottom-5 md:left-5 md:right-auto md:top-auto'

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={`fixed z-[1000] inset-0 w-full max-w-none max-h-none rounded-none overflow-auto bg-white text-left shadow-none md:w-[min(400px,calc(100vw-24px))] md:max-h-[calc(100vh-40px)] md:rounded-lg md:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.12)] ${positionClass}`}
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

      {formState === 'success' ? (
        <SupportSuccess titleId={titleId} onClose={onClose} />
      ) : (
        <>
          <div className="px-5 pt-5 pr-10">
            <h2
              id={titleId}
              className="m-0 text-lg font-bold leading-tight text-greyscale-950"
            >
              {t('support.title')}
            </h2>
            <p className="mt-2 mb-0 text-sm leading-snug text-greyscale-500">
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
              <SupportField
                id="support-subject"
                label={t('support.subject_label')}
                error={fieldErrors.subject}
                value={subject}
                onChange={setSubject}
                inputRef={subjectRef}
                required
              />

              <SupportField
                as="textarea"
                id="support-message"
                label={t('support.message_label')}
                error={fieldErrors.message}
                value={message}
                onChange={setMessage}
                inputRef={messageRef}
                required
                rows={5}
              />

              <SupportAttachments
                attachments={attachments}
                onChange={setAttachments}
                onError={setErrorDetail}
                disabled={formState === 'submitting'}
              />

              {showEmailField && (
                <SupportField
                  id="support-email"
                  label={t('support.email_label')}
                  error={fieldErrors.email}
                  value={email}
                  onChange={setEmail}
                  inputRef={emailRef}
                  type="email"
                  autoComplete="email"
                  required
                />
              )}

              <AltchaWidget
                ref={altchaRef}
                remountKey={altchaKey}
                onPayloadChange={onAltchaPayloadChange}
                challengeUrl={challengeUrl}
                scryptWorkerUrl={scryptWorkerUrl}
              />

              {errorDetail && (
                <p className="m-0 text-xs text-[#ce0500]" role="alert">
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
                  className="!min-w-10 !flex-1"
                >
                  {formState === 'submitting'
                    ? t('support.sending')
                    : t('support.send')}
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
