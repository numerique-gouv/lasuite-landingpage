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
    /** Set by the embeddable widget bundle so SCRYPT works cross-origin. */
    __LASUITE_ALTCHA_SCRYPT_SOURCE__?: string
  }
}

let scryptBlobUrl: string | null = null

function workerFactoryFromSource(source: string): () => Worker {
  if (!scryptBlobUrl) {
    scryptBlobUrl = URL.createObjectURL(
      new Blob([source], { type: 'application/javascript' })
    )
  }
  const url = scryptBlobUrl
  return () => new Worker(url)
}

/**
 * Classic Workers cannot load cross-origin scripts. Same-origin uses the URL
 * directly; otherwise we build a blob URL (inline source or fetched source).
 */
async function registerScryptWorker(workerUrl: string): Promise<boolean> {
  const altcha = window.$altcha
  if (!altcha) return false
  if (altcha.algorithms.has('SCRYPT')) return true

  const absolute = new URL(workerUrl, window.location.href).href
  const sameOrigin = absolute.startsWith(window.location.origin)

  if (sameOrigin) {
    altcha.algorithms.set('SCRYPT', () => new Worker(absolute))
    return true
  }

  const inline = window.__LASUITE_ALTCHA_SCRYPT_SOURCE__
  if (inline) {
    altcha.algorithms.set('SCRYPT', workerFactoryFromSource(inline))
    return true
  }

  try {
    const response = await fetch(absolute)
    if (!response.ok) {
      console.error('ALTCHA scrypt worker fetch failed', response.status)
      return false
    }
    const source = await response.text()
    altcha.algorithms.set('SCRYPT', workerFactoryFromSource(source))
    return true
  } catch (error) {
    console.error('ALTCHA scrypt worker unavailable cross-origin', error)
    return false
  }
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
      if (!window.$altcha && !scriptReady) return
      let cancelled = false
      void registerScryptWorker(scryptWorkerUrl).then((ok) => {
        if (!cancelled) setScryptReady(ok)
      })
      return () => {
        cancelled = true
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
            auto="off"
            display="invisible"
            // Shadow DOM: ALTCHA CSS is injected on document and does not apply
            // here — keep the widget out of layout; verify() is called from the form.
            style={{ display: 'none' }}
            aria-hidden="true"
          />
        ) : null}
      </>
    )
  }
)
