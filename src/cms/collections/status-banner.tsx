import type { CmsCollectionFile } from 'decap-cms-core'
import { createCollection } from '../createCollection'
import type { FileCollection } from '../types'
import {
  StatusBanner,
  type StatusBannerProps,
} from '@/components/content-blocks/StatusBanner'

/**
 * pages that can display a CMS-driven status banner at their top.
 * key = banner id, `label` = name shown in the CMS, `path` = page url.
 *
 * to add a page: add it here, create `content/custom-pages/{id}-banner.yml`
 * and use `getStatusBannerStaticProps('{id}')` in the page.
 */
export const STATUS_BANNER_PAGES = {
  home: { label: 'Accueil', path: '/' },
  tchap: { label: 'Tchap', path: '/produits/tchap' },
  docs: { label: 'Docs', path: '/produits/docs' },
  fichiers: { label: 'Fichiers', path: '/produits/fichiers' },
  visio: { label: 'Visio', path: '/produits/visio' },
  grist: { label: 'Grist', path: '/produits/grist' },
} as const

export type StatusBannerPage = keyof typeof STATUS_BANNER_PAGES
type StatusBannerPageConfig = (typeof STATUS_BANNER_PAGES)[StatusBannerPage]

// the CMS entry is the banner props, plus a switch to show/hide it
export type EntrySchema = Pick<
  StatusBannerProps,
  'message' | 'type' | 'link'
> & {
  enabled?: boolean
}

const createConfig = (
  id: StatusBannerPage,
  { label, path }: StatusBannerPageConfig
): CmsCollectionFile => ({
  label: `Bandeau de statut ${label}`,
  name: `${id}-banner`,
  file: `content/custom-pages/${id}-banner.yml`,
  i18n: true,
  fields: [
    {
      label: 'Afficher le bandeau ?',
      hint: `Affiche le bandeau en haut de la page ${label} (${path})`,
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
  <StatusBanner {...data} dismissible={false} />
)

export const statusBannerCollections = Object.fromEntries(
  (
    Object.entries(STATUS_BANNER_PAGES) as [
      StatusBannerPage,
      StatusBannerPageConfig,
    ][]
  ).map(([id, page]) => [
    id,
    createCollection<EntrySchema>({
      config: createConfig(id, page),
      entryParser,
      entryPreview,
    }),
  ])
) as Record<StatusBannerPage, FileCollection<EntrySchema>>
