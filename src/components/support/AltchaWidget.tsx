import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import Script from 'next/script'

const ALTCHA_SCRIPT =
  'https://cdn.jsdelivr.net/npm/altcha@3.3.0/dist/main/altcha.min.js'
const DEFAULT_SCRYPT_WORKER_URL = '/altcha/workers/scrypt.js'
const DEFAULT_CHALLENGE_URL = '/api/support/challenge'

type AltchaStateChangeDetail = {
  state?: string
  payload?: string | null
}

type AltchaElement = HTMLElement & {
  verify?: () => Promise<boolean | { payload?: string } | null>
  getState?: () => string
}

type AltchaGlobals = {
  algorithms: {
    has: (name: string) => boolean
    set: (name: string, factory: () => Worker) => void
  }
}

declare global {
  interface Window {
    $altcha?: AltchaGlobals
  }
}

function registerScryptWorker(workerUrl: string): boolean {
  const altcha = window.$altcha
  if (!altcha) return false
  if (!altcha.algorithms.has('SCRYPT')) {
    altcha.algorithms.set('SCRYPT', () => new Worker(workerUrl))
  }
  return true
}

export type AltchaWidgetHandle = {
  verify: () => Promise<string>
}

type AltchaWidgetProps = {
  remountKey: number
  onPayloadChange: (payload: string) => void
  /** Absolute or same-origin challenge URL. */
  challengeUrl?: string
  /** Absolute or same-origin scrypt worker URL. */
  scryptWorkerUrl?: string
}

export const AltchaWidget = forwardRef<AltchaWidgetHandle, AltchaWidgetProps>(
  function AltchaWidget(
    {
      remountKey,
      onPayloadChange,
      challengeUrl = DEFAULT_CHALLENGE_URL,
      scryptWorkerUrl = DEFAULT_SCRYPT_WORKER_URL,
    },
    ref
  ) {
    const widgetRef = useRef<AltchaElement | null>(null)
    const payloadRef = useRef('')
    const [scriptReady, setScriptReady] = useState(false)
    const [scryptReady, setScryptReady] = useState(false)

    useEffect(() => {
      if (window.$altcha || scriptReady) {
        setScryptReady(registerScryptWorker(scryptWorkerUrl))
      }
    }, [scriptReady, scryptWorkerUrl])

    useEffect(() => {
      const widget = widgetRef.current
      if (!widget || !scryptReady) return

      const onStateChange = (event: Event) => {
        const detail = (event as CustomEvent<AltchaStateChangeDetail>).detail
        if (detail?.state === 'verified' && detail.payload) {
          payloadRef.current = detail.payload
          onPayloadChange(detail.payload)
        } else {
          payloadRef.current = ''
          onPayloadChange('')
        }
      }

      widget.addEventListener('statechange', onStateChange)
      return () => widget.removeEventListener('statechange', onStateChange)
    }, [scryptReady, remountKey, onPayloadChange])

    useImperativeHandle(
      ref,
      () => ({
        verify: async () => {
          if (payloadRef.current) return payloadRef.current
          const widget = widgetRef.current
          if (!widget?.verify) return ''
          const result = await widget.verify()
          if (payloadRef.current) return payloadRef.current
          if (result && typeof result === 'object' && result.payload) {
            payloadRef.current = result.payload
            onPayloadChange(result.payload)
            return result.payload
          }
          return ''
        },
      }),
      [onPayloadChange]
    )

    return (
      <>
        <Script
          type="module"
          src={ALTCHA_SCRIPT}
          strategy="afterInteractive"
          onLoad={() => setScriptReady(true)}
        />
        {scryptReady ? (
          <altcha-widget
            key={remountKey}
            ref={widgetRef as React.RefObject<HTMLElement>}
            challenge={challengeUrl}
            auto="onsubmit"
            display="invisible"
          />
        ) : null}
      </>
    )
  }
)
