import { createRoot, type Root } from 'react-dom/client'
import { SupportPanel } from '@/components/support/SupportPanel'
import { TranslationsProvider } from '@/locales/useTranslations'
import widgetCss from '../dist/widget.css'

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

function injectStyles() {
  const id = 'lasuite-support-widget-css'
  if (document.getElementById(id)) return
  const style = document.createElement('style')
  style.id = id
  style.textContent = widgetCss
  document.head.appendChild(style)
}

let root: Root | null = null
let host: HTMLDivElement | null = null

function closePanel() {
  root?.unmount()
  root = null
  host?.remove()
  host = null
  emit('closed')
}

function openPanel(options: InitOptions) {
  if (!options.api || !options.channel) {
    console.error('Support widget requires an API URL and a channel ID')
    return
  }

  injectStyles()
  closePanel()

  host = document.createElement('div')
  host.id = HOST_ID
  document.body.appendChild(host)
  root = createRoot(host)

  const apiBase = ensureTrailingSlash(options.api)
  const locale = options.locale || document.documentElement.lang || 'fr'

  root.render(
    <TranslationsProvider locale={locale.split('-')[0]}>
      <SupportPanel
        channel={options.channel}
        email={options.email}
        open
        apiBase={apiBase}
        position={options.position || 'bottom-right'}
        onClose={closePanel}
        onSuccess={() => emit('success')}
      />
    </TranslationsProvider>
  )

  emit('opened', options)
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
