import type { CmsCollectionFile } from 'decap-cms-core'
import { createCollection } from '../createCollection'
import type { FileCollection } from '../types'
import {
  StatusBanner,
  type StatusBannerType,
} from '@/components/content-blocks/StatusBanner'

/**
 * products that can display a CMS-driven status banner on their landing page.
 * key = product slug (page lives at /produits/{slug}), value = display name.
 *
 * to add a product: add it here, create `content/custom-pages/{slug}-banner.yml`
 * and use `getStatusBannerStaticProps('{slug}')` in its page.
 */
export const STATUS_BANNER_PRODUCTS = {
  tchap: 'Tchap',
  docs: 'Docs',
  fichiers: 'Fichiers',
  visio: 'Visio',
} as const

export type StatusBannerProduct = keyof typeof STATUS_BANNER_PRODUCTS

export type EntrySchema = {
  enabled?: boolean
  type?: StatusBannerType
  message?: string
  link?: {
    label?: string
    url?: string
  }
}

const createConfig = (
  slug: StatusBannerProduct,
  productName: string
): CmsCollectionFile => ({
  label: `Bandeau de statut ${productName}`,
  name: `${slug}-banner`,
  file: `content/custom-pages/${slug}-banner.yml`,
  i18n: true,
  fields: [
    {
      label: 'Afficher le bandeau ?',
      hint: `Affiche le bandeau en haut de la landing ${productName} (/produits/${slug})`,
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
      default: 'default',
      options: [
        { label: 'Bleu (information)', value: 'default' },
        { label: 'Orange (avertissement)', value: 'warning' },
        { label: 'Rouge (incident)', value: 'error' },
      ],
      i18n: 'duplicate',
    },
    {
      label: 'Message',
      hint: 'Une phrase courte, ex. « Une mise à jour est prévue aujourd’hui à 13h. »',
      name: 'message',
      widget: 'string',
      required: false,
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
})

const entryParser = async (json: EntrySchema) => structuredClone(json)

const entryPreview = (data: EntrySchema) => (
  <StatusBanner
    message={data.message}
    type={data.type}
    link={data.link}
    dismissible={false}
  />
)

export const statusBannerCollections = Object.fromEntries(
  (
    Object.entries(STATUS_BANNER_PRODUCTS) as [StatusBannerProduct, string][]
  ).map(([slug, name]) => [
    slug,
    createCollection<EntrySchema>({
      config: createConfig(slug, name),
      entryParser,
      entryPreview,
    }),
  ])
) as Record<StatusBannerProduct, FileCollection<EntrySchema>>
