import type { CmsCollectionFile } from 'decap-cms-core'
import { toHtml } from '@/utils/markdown'
import { createCollection } from '../createCollection'
import { HomepageContent } from '@/components/HomepageContent'
import { EntryImage } from '../types'

const config: CmsCollectionFile = {
  name: 'homepage',
  label: "Page d'accueil",
  file: 'content/custom-pages/homepage.yml',
  preview_path: '/',
  i18n: true,
  fields: [
    {
      label: 'Introduction',
      name: 'intro',
      widget: 'markdown',
      i18n: true,
    },
    {
      label: 'Texte mis en avant (en dessous de l\'image "hero")',
      name: 'callout',
      widget: 'text',
      hint: 'Finissez une ligne avec deux espaces vides pour sauter une ligne',
      i18n: true,
    },
    {
      label: 'Communs numériques : description',
      name: 'apps_description',
      widget: 'markdown',
      editor_components: [],
      i18n: true,
    },
    {
      label: 'Contribuer à La Suite : description',
      name: 'initiatives_description',
      widget: 'markdown',
      editor_components: [],
      i18n: true,
    },
    {
      label: 'Contribuer à La Suite : CTA',
      name: 'initiatives_cta',
      widget: 'object',
      i18n: true,
      fields: [
        {
          label: 'Libellé',
          name: 'label',
          widget: 'string',
          i18n: true,
        },
        {
          label: 'URL',
          name: 'href',
          i18n: 'duplicate',
          widget: 'string',
        },
      ],
    },
    {
      label: 'FAQ',
      name: 'faq',
      widget: 'list',
      i18n: true,
      fields: [
        {
          label: 'Question',
          name: 'question',
          widget: 'text',
          hint: 'Finissez une ligne avec deux espaces vides pour sauter une ligne',
        },
        {
          label: 'Réponse',
          name: 'answer',
          widget: 'markdown',
        },
      ],
    },
    {
      label: 'Témoigagnes : titre',
      name: 'testimonies_title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Témoigagnes : description',
      name: 'testimonies_description',
      widget: 'markdown',
      i18n: true,
    },
    {
      label: 'Témoignages : citations',
      name: 'testimonies_items',
      widget: 'list',
      i18n: true,
      fields: [
        {
          label: 'Auteur',
          name: 'author',
          widget: 'string',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Citation',
          name: 'quote',
          widget: 'markdown',
        },
      ],
    },
    {
      label: 'La Suite Territoriale : description',
      name: 'anct_description',
      widget: 'markdown',
      editor_components: [],
      i18n: true,
    },
    {
      label: 'La Suite Territoriale : logos partenaires',
      name: 'anct_partenaires',
      widget: 'list',
      i18n: true,
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Alternative textuelle',
          name: 'alt',
          widget: 'string',
          hint: "Décrivez le contenu de l'image pour les lecteurs d'écran",
        },
      ],
    },
    {
      label: 'Lien newsletter',
      name: 'newsletter_link',
      widget: 'string',
      i18n: 'duplicate',
    },
  ],
}

/**
 * take the homepage file content as JSON and prepare it for rendering
 *
 * we usually convert markdown to HTML here
 */
const entryParser = async (json: EntrySchema) => {
  const homepage = structuredClone(json)
  const mdFields = [
    'intro',
    'apps_description',
    'initiatives_description',
    'testimonies_description',
    'anct_description',
  ] as const
  const inlineMdFields = [
    'callout',
    'testimonies_title',
    'newsletter_link',
  ] as const

  const transforms = [
    ...mdFields.map(async (field) => {
      if (homepage[field]) {
        homepage[field] = await toHtml(homepage[field])
      }
    }),
    ...inlineMdFields.map(async (field) => {
      if (homepage[field]) {
        homepage[field] = await toHtml(homepage[field], { inline: true })
      }
    }),
  ]
  if (homepage.faq) {
    transforms.push(
      ...homepage.faq.map(async (item) => {
        item.question = await toHtml(item.question, { inline: true })
        item.answer = await toHtml(item.answer)
      })
    )
  }
  if (homepage.testimonies_items) {
    transforms.push(
      ...homepage.testimonies_items.map(async (item) => {
        item.author = await toHtml(item.author, { inline: true })
        item.quote = await toHtml(item.quote)
      })
    )
  }

  await Promise.all(transforms)
  return homepage
}

const entryPreview = (data: EntrySchema) => (
  <div className="text-body">
    <HomepageContent data={data} />
  </div>
)

export type EntrySchema = {
  intro: string
  callout: string
  apps_description: string
  initiatives_description: string
  initiatives_cta: {
    label: string
    href: string
  }
  faq?: {
    question: string
    answer: string
  }[]
  testimonies_title: string
  testimonies_description: string
  testimonies_items?: Array<
    {
      quote: string
      author: string
    } & EntryImage
  >
  anct_description: string
  anct_partenaires?: Array<
    {
      alt: string
    } & EntryImage
  >
  newsletter_link: string
}

export const collection = createCollection<EntrySchema>({
  config,
  entryParser,
  entryPreview,
})
