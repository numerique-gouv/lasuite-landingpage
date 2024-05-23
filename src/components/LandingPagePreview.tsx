import type { PreviewTemplateComponentProps } from 'decap-cms-core'
import { parseMarkdown } from '@/utils/cms'
import { LandingPageContent } from './LandingPageContent'
import { useEffect, useState } from 'react'
import { LandingPageSchema } from '@/cms/landing-page.schema'

export default function LandingPagePreview({
  entry,
}: PreviewTemplateComponentProps) {
  const [data, setData] = useState<LandingPageSchema | null>(null)
  useEffect(() => {
    parseMarkdown(entry.getIn(['data']).toJS()).then(setData)
  }, [entry])
  return data ? <LandingPageContent id={data.id} data={data} /> : 'Chargement…'
}
