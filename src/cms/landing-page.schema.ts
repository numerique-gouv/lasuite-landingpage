type background =
  | 'none'
  | 'auto'
  | 'blue'
  | 'yellow'
  | 'green'
  | 'orange'
  | 'purple'

export type LandingPageSchema = {
  hero: {
    actions: {
      primary: boolean
      label: string
      href: string
    }[]
    title: string
    subtitle: string
    image: string
  }
  id: string
  title: string
  flexible_content: (
    | {
        type: 'content'
        bg: background
        title: string
        body: string
      }
    | {
        type: 'screenshot'
        bg: background
        title?: string
        body: string
        image: string
        image_position?: string
      }
    | {
        type: 'pictures'
        title?: string
        body?: string
        bg: background
        items: {
          image: string
          alt: string
          href?: string
        }[]
      }
    | {
        type: 'cards'
        bg: background
        items: {
          title: string
          body: string
          image?: string
        }[]
      }
    | {
        type: 'testimonies'
        title?: string
        bg: background
        items: {
          quote: string
          author: string
        }[]
      }
    | {
        type: 'faq'
        title?: string
        bg: background
        items: {
          question: string
          answer: string
        }[]
      }
    | {
        type: 'cta'
        cta: {
          target_blank?: boolean
          label: string
          href: string
        }
        bg: background
        title?: string
        body?: string
      }
  )[]
  newsletter?: {
    enable: boolean
    body?: string
    cta_href?: string
  }
  socials?: {
    enable: boolean
    twitter?: string
    facebook?: string
    linkedin?: string
    youtube?: string
    instagram?: string
  }
}
