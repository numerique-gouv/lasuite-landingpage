import type { CmsCollectionFile } from 'decap-cms-core'
import { toHtml } from '@/utils/markdown'
import { createCollection } from '../createCollection'
import { CommunsContent } from '@/components/CommunsContent'

const config: CmsCollectionFile = {
  name: 'communs',
  label: 'Page "communs"',
  file: 'content/custom-pages/communs.yml',
  preview_path: '/communs',
  i18n: true,
  fields: [
    {
      label: 'Titre',
      name: 'title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Introduction',
      name: 'intro',
      widget: 'markdown',
      hint: 'Texte affiché entre le titre et le calendrier',
      i18n: true,
    },
    {
      label: 'Calendrier',
      name: 'dates',
      widget: 'markdown',
      hint: 'Texte affiché en dessous du schéma du calendrier',
      i18n: true,
    },
    {
      label: 'Processus de sélection : alternative textuelle',
      name: 'selection',
      widget: 'markdown',
      hint: 'Texte décrivant le schéma du processus de sélection',
      i18n: true,
    },
    {
      label: 'CTA',
      name: 'cta',
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
  ],
}

const entryParser = async (json: EntrySchema) => {
  const page = structuredClone(json)
  page.intro = await toHtml(page.intro)
  page.dates = await toHtml(page.dates)
  page.selection = await toHtml(page.selection)
  return page
}

const entryPreview = (data: EntrySchema) => (
  <div className="text-body">
    <CommunsContent data={data} />
  </div>
)

export type EntrySchema = {
  title: string
  intro: string
  dates: string
  selection: string
  cta: {
    label: string
    href: string
  }
}

export const collection = createCollection<EntrySchema>({
  config,
  entryParser,
  entryPreview,
})
