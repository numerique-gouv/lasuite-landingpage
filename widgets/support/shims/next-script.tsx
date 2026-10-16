import { useEffect } from 'react'

type ScriptProps = {
  src: string
  type?: string
  strategy?: string
  onLoad?: () => void
  onError?: () => void
}

/**
 * Stub `next/script` for the embeddable widget bundle.
 * Loads the script once in the document head.
 */
export default function Script({ src, type, onLoad, onError }: ScriptProps) {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`
    )
    if (existing) {
      if (
        (existing as HTMLScriptElement & { dataset: DOMStringMap }).dataset
          .loaded === '1'
      ) {
        onLoad?.()
      } else {
        existing.addEventListener('load', () => onLoad?.(), { once: true })
        existing.addEventListener('error', () => onError?.(), { once: true })
      }
      return
    }

    const script = document.createElement('script')
    script.src = src
    if (type) script.type = type
    script.onload = () => {
      script.dataset.loaded = '1'
      onLoad?.()
    }
    script.onerror = () => onError?.()
    document.head.appendChild(script)
  }, [src, type, onLoad, onError])

  return null
}
