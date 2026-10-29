import type { CmsCollectionFile } from 'decap-cms-core'
import { createCollection } from '../createCollection'
import {
  TopToastBanner,
  type TopToastBannerType,
} from '@/components/content-blocks/TopToastBanner'

const config: CmsCollectionFile = {
  label: 'Bandeau de statut Tchap',
  name: 'tchap-banner',
  file: 'content/custom-pages/tchap-banner.yml',
  i18n: true,
  fields: [
    {
      label: 'Afficher le bandeau ?',
      hint: 'Affiche le bandeau en haut de la landing Tchap (/produits/tchap)',
      name: 'enabled',
      widget: 'boolean',
      required: false,
      default: false,
      i18n: 'duplicate',
    },
    {
      label: 'Couleur',
      name: 'type',
      widget: 'select',
      default: 'info',
      options: [
        { label: 'Bleu (information)', value: 'info' },
        { label: 'Orange (avertissement)', value: 'warning' },
        { label: 'Rouge (incident)', value: 'error' },
      ],
      i18n: 'duplicate',
    },
    {
      label: 'Titre (facultatif)',
      name: 'title',
      widget: 'string',
      required: false,
      i18n: true,
    },
    {
      label: 'Message',
      hint: 'Une phrase courte, ex. « Une mise à jour est prévue aujourd’hui à 13h. »',
      name: 'message',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Lien (facultatif)',
      name: 'link',
      widget: 'object',
      required: false,
      i18n: true,
      fields: [
        {
          label: 'Texte du lien',
          name: 'label',
          widget: 'string',
          required: false,
          i18n: true,
        },
        {
          label: 'URL',
          name: 'url',
          widget: 'string',
          required: false,
          pattern: [
            '^(https://|mailto:)',
            'L’URL doit commencer par https:// ou mailto:',
          ],
          i18n: 'duplicate',
        },
      ],
    },
  ],
}

export type EntrySchema = {
  enabled?: boolean
  type?: TopToastBannerType
  title?: string
  message?: string
  link?: {
    label?: string
    url?: string
  }
}

const entryParser = async (json: EntrySchema) => structuredClone(json)

const entryPreview = (data: EntrySchema) => (
  <TopToastBanner
    title={data.title}
    content={data.message}
    type={data.type}
    link={data.link}
  />
)

export const collection = createCollection<EntrySchema>({
  config,
  entryParser,
  entryPreview,
})
