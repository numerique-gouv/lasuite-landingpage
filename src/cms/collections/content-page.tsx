import type { CmsCollection } from 'decap-cms-core'
import { toHtml } from '@/utils/markdown'
import { PageContent } from '@/components/PageContent'
import { createCollection } from '../createCollection'
import { Raw } from '@/components/Raw'
import { i18n } from '../commonFields'
import { I18nField } from '../types'

const config: CmsCollection = {
  label: 'Pages de contenu',
  label_singular: 'Page de contenu',
  name: 'content-page',
  identifier_field: 'title',
  slug: '{{fields.slug}}',
  format: 'yml',
  folder: 'content/content-pages',
  preview_path: '/{{id}}',
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
      hint: 'Écrivez un texte tout en minuscules, sans accent, espace ou caractère spécial. Il est utilisé comme URL de la page',
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
      hint: 'vous pouvez utiliser [**les variables suivantes**](https://github.com/numerique-gouv/lasuite-landingpage/blob/main/src/constant.ts) dans le contenu en les mettant entre accolades. Exemple : {CONTACT_EMAIL}.',
      i18n: true,
    },
  ],
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

export type EntrySchema = I18nField & {
  enabled: boolean
  slug: string
  title: string
  body: string
}

export const collection = createCollection<EntrySchema>({
  config,
  entryParser,
  entryPreview,
})
