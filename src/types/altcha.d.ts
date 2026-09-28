import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        challenge?: string
        auto?: 'off' | 'onfocus' | 'onload' | 'onsubmit'
        display?: 'standard' | 'bar' | 'floating' | 'overlay' | 'invisible'
        name?: string
      }
    }
  }
}

export {}
