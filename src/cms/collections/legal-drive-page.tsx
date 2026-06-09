import type { CmsCollection } from 'decap-cms-core'
import { toHtml } from '@/utils/markdown'
import { PageContent } from '@/components/PageContent'
import { createCollection } from '../createCollection'
import { Raw } from '@/components/Raw'
import { i18n } from '../commonFields'
import type { I18nField } from '../types'

const config: CmsCollection = {
  label: 'Pages légales Drive',
  label_singular: 'Page légale Drive',
  name: 'legal-drive-page',
  identifier_field: 'title',
  slug: '{{fields.slug}}',
  format: 'yml',
  folder: 'content/legal-drive-pages',
  preview_path: '/legal/drive/{{id}}',
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
      label: 'slug',
      hint: 'URL slug pour /legal/drive/{slug}',
      name: 'slug',
      widget: 'string',
    },
    {
      label: 'Titre de la page',
      name: 'title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Contenu',
      name: 'body',
      widget: 'markdown',
      i18n: true,
    },
  ],
}

export type EntrySchema = I18nField & {
  enabled: boolean
  slug: string
  title: string
  body: string
}

const entryParser = async (json: EntrySchema) => {
  const data = structuredClone(json)
  data.body = await toHtml(data.body)
  return data
}

const entryPreview = (data: EntrySchema) => (
  <PageContent title={data.title}>
    <Raw>{data.body}</Raw>
  </PageContent>
)

export const collection = createCollection<EntrySchema>({
  config,
  entryParser,
  entryPreview,
})
