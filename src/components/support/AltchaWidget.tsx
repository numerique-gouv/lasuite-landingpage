import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

const ALTCHA_SCRIPT =
  'https://cdn.jsdelivr.net/npm/altcha@3.3.0/dist/main/altcha.min.js'
const SCRYPT_WORKER_URL = '/altcha/workers/scrypt.js'
const CHALLENGE_URL = '/api/support/challenge'

type AltchaStateChangeDetail = {
  state?: string
  payload?: string | null
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

function registerScryptWorker(): boolean {
  const altcha = window.$altcha
  if (!altcha) return false
  if (!altcha.algorithms.has('SCRYPT')) {
    altcha.algorithms.set('SCRYPT', () => new Worker(SCRYPT_WORKER_URL))
  }
  return true
}

type AltchaWidgetProps = {
  remountKey: number
  onPayloadChange: (payload: string) => void
}

export const AltchaWidget = ({
  remountKey,
  onPayloadChange,
}: AltchaWidgetProps) => {
  const widgetRef = useRef<HTMLElement | null>(null)
  const [scriptReady, setScriptReady] = useState(false)
  const [scryptReady, setScryptReady] = useState(false)

  useEffect(() => {
    // Script may already be cached — onLoad won't re-fire.
    if (window.$altcha || scriptReady) {
      setScryptReady(registerScryptWorker())
    }
  }, [scriptReady])

  useEffect(() => {
    const widget = widgetRef.current
    if (!widget || !scryptReady) return

    const onStateChange = (event: Event) => {
      const detail = (event as CustomEvent<AltchaStateChangeDetail>).detail
      if (detail?.state === 'verified' && detail.payload) {
        onPayloadChange(detail.payload)
      } else {
        onPayloadChange('')
      }
    }

    widget.addEventListener('statechange', onStateChange)
    return () => widget.removeEventListener('statechange', onStateChange)
  }, [scryptReady, remountKey, onPayloadChange])

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
          challenge={CHALLENGE_URL}
          auto="onload"
          display="invisible"
        />
      ) : null}
    </>
  )
}
