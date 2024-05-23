import { LandingPageSchema } from '@/cms/landing-page.schema'
import { toHtml } from './markdown'

export const parseMarkdown = async (serviceJson: LandingPageSchema) => {
  const service = structuredClone(serviceJson)
  if (service.hero.title) {
    service.hero.title = await toHtml(service.hero.title, { inline: true })
  }
  if (service.hero.subtitle) {
    service.hero.subtitle = await toHtml(service.hero.subtitle, {
      inline: true,
    })
  }
  ;(service.flexible_content || []).forEach(
    async ({ type, ...data }, i, arr) => {
      // @ts-ignore
      if (data.body) {
        // @ts-ignore
        arr[i].body = await toHtml(data.body)
      }

      if (type === 'faq') {
        // @ts-ignore
        data.items.forEach(async (item, y, subArr) => {
          subArr[y].question = await toHtml(item.question, { inline: true })
          subArr[y].answer = await toHtml(item.answer)
        })
      }

      if (type === 'testimonies') {
        // @ts-ignore
        data.items.forEach(async (item, y, subArr) => {
          subArr[y].quote = await toHtml(item.quote)
          subArr[y].author = await toHtml(item.author, { inline: true })
        })
      }

      if (type === 'cards') {
        // @ts-ignore
        data.items.forEach(async (item, y, subArr) => {
          subArr[y].body = await toHtml(item.body)
        })
      }
    }
  )

  if (service.newsletter?.body) {
    service.newsletter.body = await toHtml(service.newsletter.body, {
      inline: true,
    })
  }
  return service
}
