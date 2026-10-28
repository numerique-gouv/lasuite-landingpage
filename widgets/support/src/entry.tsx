import { useCallback, useRef, useState } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { SupportPanel } from '@/components/support/SupportPanel'
import { SupportSuccessToast } from '@/components/support/SupportSuccessToast'
import { TranslationsProvider } from '@/locales/useTranslations'
import widgetCss from '../dist/widget.css'
// Inlined so SCRYPT works when the host page is cross-origin (accounts, dimail, …).
import scryptWorkerSource from '../../../public/altcha/workers/scrypt.js?raw'

window.__LASUITE_ALTCHA_SCRYPT_SOURCE__ = scryptWorkerSource

const WIDGET = 'support'
const HOST_ID = 'lasuite-widget-support-root'
const EVENT_PREFIX = 'lasuite-widget'

type InitOptions = {
  api: string
  channel: string
  email?: string
  locale?: string
  position?: 'bottom-left' | 'bottom-right' | 'top-right'
}

declare global {
  interface Window {
    _lasuite_widget?: Array<unknown> & {
      _loaded?: Record<string, number>
      push: (...args: unknown[]) => number
    }
  }
}

function emit(event: string, detail?: unknown) {
  document.dispatchEvent(
    new CustomEvent(`${EVENT_PREFIX}-${WIDGET}-${event}`, { detail })
  )
}

function on(event: string, handler: (detail: InitOptions) => void) {
  const name = `${EVENT_PREFIX}-${WIDGET}-${event}`
  const listener = (e: Event) => handler((e as CustomEvent).detail)
  document.addEventListener(name, listener)
  return () => document.removeEventListener(name, listener)
}

function ensureTrailingSlash(url: string) {
  return url.endsWith('/') ? url : `${url}/`
}

let root: Root | null = null
let host: HTMLDivElement | null = null

function destroyHost() {
  root?.unmount()
  root = null
  host?.remove()
  host = null
}

function closePanel() {
  destroyHost()
  emit('closed')
}

type WidgetAppProps = {
  apiBase: string
  channel: string
  email?: string
  position: NonNullable<InitOptions['position']>
  onOpen: () => void
  onDismiss: () => void
}

function WidgetApp({
  apiBase,
  channel,
  email,
  position,
  onOpen,
  onDismiss,
}: WidgetAppProps) {
  const [panelOpen, setPanelOpen] = useState(true)
  const [toastOpen, setToastOpen] = useState(false)
  const keepForToast = useRef(false)

  const handleSuccess = useCallback(() => {
    keepForToast.current = true
    setToastOpen(true)
    emit('success')
  }, [])

  const handleClose = useCallback(() => {
    setPanelOpen(false)
    if (!keepForToast.current) {
      onDismiss()
    }
  }, [onDismiss])

  const dismissToast = useCallback(() => {
    keepForToast.current = false
    setToastOpen(false)
    onDismiss()
  }, [onDismiss])

  return (
    <>
      <SupportPanel
        channel={channel}
        email={email}
        open={panelOpen}
        apiBase={apiBase}
        position={position}
        onOpen={onOpen}
        onClose={handleClose}
        onSuccess={handleSuccess}
      />
      <SupportSuccessToast open={toastOpen} onDismiss={dismissToast} />
    </>
  )
}

function openPanel(options: InitOptions) {
  if (!options.api || !options.channel) {
    console.error('Support widget requires an API URL and a channel ID')
    return
  }

  destroyHost()

  // Shadow DOM isolates Tailwind from the host page (accounts, dimail, …)
  // so global form styles cannot override the inputs.
  host = document.createElement('div')
  host.id = HOST_ID
  document.body.appendChild(host)

  const shadow = host.attachShadow({ mode: 'open' })
  const style = document.createElement('style')
  style.textContent = widgetCss
  shadow.appendChild(style)

  const mount = document.createElement('div')
  mount.id = 'lasuite-support-mount'
  shadow.appendChild(mount)

  root = createRoot(mount)

  const apiBase = ensureTrailingSlash(options.api)
  const locale = options.locale || document.documentElement.lang || 'fr'

  root.render(
    <TranslationsProvider locale={locale.split('-')[0]}>
      <WidgetApp
        apiBase={apiBase}
        channel={options.channel}
        email={options.email}
        position={options.position || 'bottom-right'}
        onOpen={() => {
          emit('opened', options)
        }}
        onDismiss={closePanel}
      />
    </TranslationsProvider>
  )
}

function bootstrap() {
  window._lasuite_widget = window._lasuite_widget || []
  const queue = window._lasuite_widget
  if (!queue._loaded) queue._loaded = {}

  const LOADED = 2
  if (queue._loaded[WIDGET] === LOADED) return

  const originalPush = queue.push.bind(queue)
  queue.push = (...items: unknown[]) => {
    for (const item of items) {
      const entry = item as [string, string, InitOptions]
      if (queue._loaded?.[entry[0]] === LOADED) {
        emit(entry[1], entry[2])
      } else {
        originalPush(item)
      }
    }
    return queue.length
  }

  queue._loaded[WIDGET] = LOADED
  on('init', openPanel)
  on('close', () => closePanel())

  const pending = queue.splice(0, queue.length)
  for (const item of pending) {
    queue.push(item)
  }
  emit('loaded')
}

bootstrap()
