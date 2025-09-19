import type {
  CmsFieldBase,
  CmsFieldSelect,
  CmsCollection,
} from 'decap-cms-core'
import { ServicePageContent } from '@/components/ServicePageContent'
import { toHtml } from '@/utils/markdown'
import { createCollection } from '../createCollection'
import { EntryImage, I18nField } from '../types'
import { i18n } from '../commonFields'

const bgField: CmsFieldBase & CmsFieldSelect = {
  label: 'Couleur de fond',
  hint: "Choisir 'automatique' alterne des fonds bleus et blancs sur chaque bloc",
  name: 'bg',
  widget: 'select',
  default: 'auto',
  options: [
    { value: 'none', label: 'aucun' },
    { value: 'auto', label: 'automatique' },
    { value: 'blue', label: 'bleu' },
    { value: 'yellow', label: 'jaune' },
    { value: 'green', label: 'vert' },
    { value: 'orange', label: 'orange' },
    { value: 'purple', label: 'violet' },
  ],
  required: false,
}

const config: CmsCollection = {
  label: 'Pages de services',
  label_singular: 'Page de service',
  name: 'service-page',
  identifier_field: 'title',
  slug: '{{fields.id}}',
  format: 'yml',
  folder: 'content/service-pages',
  preview_path: '/about/{{id}}',
  i18n: true,
  create: true,
  fields: [
    {
      label: 'Page activée ?',
      hint: 'Décocher cette case rendra la page inaccessible sur le site',
      name: 'enabled',
      widget: 'boolean',
      required: false,
      default: true,
    },
    i18n(),
    {
      label: 'Service',
      hint: "Si votre service n'est pas listé, contactez-nous !",
      name: 'id',
      widget: 'select',
      options: [
        'audioconf',
        'demarches',
        'equipes',
        'france-transfert',
        'grist',
        'messagerie',
        'pad',
        'rdv',
        'resana',
        'tchap',
        'webconf',
        'webinaire',
      ],
    },
    {
      label: 'Nom du service',
      hint: "Affiché dans l'onglet de la page et en pied de page",
      name: 'title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        {
          label: 'Titre',
          name: 'title',
          widget: 'string',
          i18n: true,
        },
        {
          label: 'Description',
          name: 'subtitle',
          widget: 'text',
          i18n: true,
          required: false,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Embed',
          hint: "Coller ici une iframe pour par exemple afficher une vidéo peertube. Remplace l'image si renseigné",
          name: 'embed',
          widget: 'text',
          required: false,
        },
        {
          label: 'Liens',
          name: 'actions',
          widget: 'list',
          required: false,
          fields: [
            {
              label: 'Libellé',
              name: 'label',
              widget: 'string',
            },
            {
              label: 'URL',
              name: 'href',
              widget: 'string',
            },
            {
              label: 'Mis en avant ?',
              hint: 'Cocher pour afficher le bouton avec un fond bleu',
              name: 'primary',
              widget: 'boolean',
              required: false,
              default: true,
            },
            {
              label: 'Ouverture dans nouvelle fenêtre ?',
              name: 'target_blank',
              widget: 'boolean',
              required: false,
              default: false,
            },
          ],
        },
      ],
    },
    {
      label: 'Blocs de contenus',
      name: 'flexible_content',
      widget: 'list',
      types: [
        {
          label: 'Contenu texte/images simple',
          name: 'content',
          widget: 'object',
          summary: '{{fields.title}}',
          fields: [
            {
              label: 'Titre',
              name: 'title',
              widget: 'string',
              i18n: true,
              required: false,
            },
            {
              label: 'Description',
              name: 'body',
              widget: 'markdown',
              i18n: true,
            },
            bgField,
          ],
        },
        {
          label: 'Contenu texte + image sur le côté',
          name: 'screenshot',
          widget: 'object',
          summary: '{{fields.title}}',
          fields: [
            {
              label: 'Titre',
              name: 'title',
              widget: 'string',
              i18n: true,
              required: false,
            },
            {
              label: 'Description',
              name: 'body',
              widget: 'markdown',
              i18n: true,
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
            },
            {
              label: "Colonne de l'image",
              name: 'image_position',
              widget: 'select',
              options: [
                { label: 'À gauche', value: 'left' },
                { label: 'À droite', value: 'right' },
              ],
              default: 'right',
            },
            bgField,
          ],
        },
        {
          label: 'Ligne de cartes',
          name: 'cards',
          widget: 'object',
          fields: [
            {
              label: 'Titre',
              name: 'title',
              widget: 'string',
              required: false,
            },
            {
              label: 'Cartes',
              name: 'items',
              widget: 'list',
              fields: [
                {
                  label: 'Titre',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Texte',
                  name: 'body',
                  widget: 'markdown',
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                  required: false,
                },
                {
                  label: 'URL',
                  name: 'href',
                  widget: 'string',
                  required: false,
                },
              ],
            },
            bgField,
          ],
        },
        {
          label: 'Grille de témoignages',
          name: 'testimonies',
          widget: 'object',
          summary: 'Témoignages',
          fields: [
            {
              label: 'Titre',
              name: 'title',
              widget: 'string',
              default: 'Témoignages',
            },
            {
              label: 'Témoignages',
              name: 'items',
              widget: 'list',
              fields: [
                {
                  label: 'Citation',
                  name: 'quote',
                  widget: 'markdown',
                },
                {
                  label: 'Auteur',
                  name: 'author',
                  widget: 'string',
                },
              ],
            },
            bgField,
          ],
        },
        {
          label: 'FAQ',
          name: 'faq',
          widget: 'object',
          summary: 'FAQ',
          fields: [
            {
              label: 'Titre',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Questions',
              name: 'items',
              widget: 'list',
              fields: [
                {
                  label: 'Question',
                  name: 'question',
                  widget: 'string',
                },
                {
                  label: 'Réponse',
                  name: 'answer',
                  widget: 'markdown',
                },
              ],
            },
            bgField,
          ],
        },
        {
          label: 'Logos partenaires',
          name: 'pictures',
          widget: 'object',
          summary: 'Logos',
          fields: [
            {
              label: 'Titre',
              name: 'title',
              widget: 'string',
              required: false,
            },
            {
              label: 'Texte',
              name: 'body',
              widget: 'markdown',
              required: false,
            },
            {
              label: 'Logos',
              name: 'items',
              widget: 'list',
              fields: [
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
                {
                  label: 'URL',
                  required: false,
                  name: 'href',
                  widget: 'string',
                },
                {
                  label: "Description de l'image",
                  hint: "Pour les lecteurs d'écrans",
                  name: 'alt',
                  widget: 'string',
                },
              ],
            },
            bgField,
          ],
        },
        {
          label: 'CTA',
          name: 'cta',
          widget: 'object',
          summary: '{{fields.cta.label}}',
          fields: [
            {
              label: 'Titre',
              name: 'title',
              widget: 'string',
              i18n: true,
              required: false,
            },
            {
              label: 'Description',
              name: 'body',
              widget: 'markdown',
              i18n: true,
              required: false,
            },
            {
              label: 'Bouton CTA',
              name: 'cta',
              widget: 'object',
              fields: [
                {
                  label: 'Libellé',
                  name: 'label',
                  widget: 'string',
                },
                {
                  label: 'URL',
                  name: 'href',
                  widget: 'string',
                },
                {
                  label: 'Ouverture dans nouvelle fenêtre ?',
                  name: 'target_blank',
                  widget: 'boolean',
                  required: false,
                  default: false,
                },
              ],
            },
            bgField,
          ],
        },
      ],
    },
    {
      label: 'Newsletter',
      name: 'newsletter',
      widget: 'object',
      fields: [
        {
          label: 'Activer bloc newsletter ?',
          name: 'enable',
          widget: 'boolean',
          required: false,
        },
        {
          label: 'Texte',
          name: 'body',
          widget: 'markdown',
          i18n: true,
          required: false,
        },
        {
          label: 'URL du lien vers la newsletter',
          name: 'cta_href',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Réseaux sociaux',
      name: 'socials',
      widget: 'object',
      fields: [
        {
          label: 'Activer bloc réseaux sociaux ?',
          name: 'enable',
          widget: 'boolean',
          required: false,
        },
        {
          label: 'URL compte Twitter',
          name: 'twitter',
          widget: 'string',
          required: false,
        },
        {
          label: 'URL compte LinkedIn',
          name: 'linkedin',
          widget: 'string',
          required: false,
        },
        {
          label: 'URL compte Facebook',
          name: 'facebook',
          widget: 'string',
          required: false,
        },
        {
          label: 'URL compte Instagram',
          name: 'instagram',
          widget: 'string',
          required: false,
        },
        {
          label: 'URL compte YouTube',
          name: 'youtube',
          widget: 'string',
          required: false,
        },
      ],
    },
  ],
}

const addAutoBackgrounds = (service: EntrySchema) => {
  // little tricks to alternate backgrounds if none are set,
  // making sure to also alternate between blocks that have set bgs
  if (!service.flexible_content?.length) {
    return service
  }
  service.flexible_content.forEach((block, i) => {
    if (i === 0 && (block.bg === 'auto' || block.bg === undefined)) {
      block.bg = 'blue'
      return
    }
    if (
      (block.bg === 'auto' || block.bg === undefined) &&
      (!service.flexible_content[i - 1].bg ||
        service.flexible_content[i - 1].bg === 'auto')
    ) {
      block.bg = 'blue'
      return
    }
  })
  return service
}

/**
 * take a service page file content as JSON and prepare it for rendering
 *
 * we usually convert markdown to HTML here
 */
const entryParser = async (json: EntrySchema) => {
  const service = structuredClone(json)

  if (service.hero.title) {
    service.hero.title = await toHtml(service.hero.title, { inline: true })
  }
  if (service.hero.subtitle) {
    service.hero.subtitle = await toHtml(service.hero.subtitle, {
      inline: true,
    })
  }

  const transforms: Array<Promise<void>> = []
  ;(service.flexible_content || []).forEach(
    async ({ type, ...data }, i, arr) => {
      // @ts-ignore
      if (data.body) {
        transforms.push(
          (async () => {
            // @ts-ignore
            arr[i].body = await toHtml(data.body)
          })()
        )
      }

      if (type === 'faq') {
        transforms.push(
          // @ts-ignore
          ...data.items.map(async (item, y, subArr) => {
            subArr[y].question = await toHtml(item.question, { inline: true })
            subArr[y].answer = await toHtml(item.answer)
          })
        )
      }

      if (type === 'testimonies') {
        transforms.push(
          // @ts-ignore
          ...data.items.map(async (item, y, subArr) => {
            subArr[y].quote = await toHtml(item.quote)
            subArr[y].author = await toHtml(item.author, { inline: true })
          })
        )
      }

      if (type === 'cards') {
        transforms.push(
          // @ts-ignore
          ...data.items.map(async (item, y, subArr) => {
            subArr[y].body = await toHtml(item.body)
          })
        )
      }
    }
  )

  await Promise.all(transforms)

  if (service.newsletter?.body) {
    service.newsletter.body = await toHtml(service.newsletter.body, {
      inline: true,
    })
  }
  return addAutoBackgrounds(service)
}

const entryPreview = (data: EntrySchema) => (
  <ServicePageContent data={data} isPreview />
)

type background =
  | 'none'
  | 'auto'
  | 'blue'
  | 'yellow'
  | 'green'
  | 'orange'
  | 'purple'

export type EntrySchema = I18nField & {
  enabled: boolean
  hero: {
    actions: {
      primary: boolean
      label: string
      href: string
    }[]
    title: string
    subtitle: string
  } & EntryImage
  id: string
  title: string
  flexible_content: (
    | {
        type: 'content'
        bg: background
        title: string
        body: string
      }
    | ({
        type: 'screenshot'
        bg: background
        title?: string
        body: string
        image_position?: string
      } & EntryImage)
    | {
        type: 'pictures'
        title?: string
        body?: string
        bg: background
        items: Array<
          {
            alt: string
            href?: string
          } & EntryImage
        >
      }
    | {
        type: 'cards'
        bg: background
        items: {
          title: string
          body: string
          image?: string
          image_dimensions?: {
            width: number
            height: number
          }
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

export const collection = createCollection<EntrySchema>({
  config,
  entryParser,
  entryPreview,
})

export default collection
