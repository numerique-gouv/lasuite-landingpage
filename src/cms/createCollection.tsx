import { useState, useEffect } from 'react'
import type { PreviewTemplateComponentProps } from 'decap-cms-core'
import type { Collection } from './types'

type CollectionParams<EntrySchema> = {
  config: Collection<EntrySchema>['config']
  entryParser: Collection<EntrySchema>['entryParser']
  entryPreview: (data: EntrySchema) => JSX.Element
}

/**
 * create a collection object matching our Collection type
 *
 * @param options the collection configuration
 * @param options.config the decapcms collection configuration. can be a folder or a file collection
 * @param options.entryParser function taking the entry data as input, parsed entry data as output (usually transforms markdown to html)
 * @param options.entryPreview function taking the parsed entry data as input, returning a JSX element to display the entry in the preview template
 * @returns a collection object with `config`, `entryParser` and `EntryPreview` properties
 */
export const createCollection = <EntrySchema,>({
  config,
  entryParser,
  entryPreview,
}: CollectionParams<EntrySchema>): Collection<EntrySchema> => {
  const EntryPreview = createPreviewComponent<EntrySchema>(
    entryParser,
    entryPreview
  )

  return {
    config,
    entryParser,
    EntryPreview,
  }
}

/**
 * helper to easily create react component matching the decapcms preview template API
 *
 * @param entryParser function to parse the entry data (usually transforms markdown to html)
 * @param callback function taking the entry data and returning JSX. It will be rendered by the preview template
 * @returns a react component that can be used as a preview template
 */
const createPreviewComponent = <EntrySchema,>(
  entryParser: (data: EntrySchema) => Promise<EntrySchema>,
  callback: (data: EntrySchema) => JSX.Element
) => {
  const PreviewComponent = ({
    entry,
    window: previewWindow,
  }: PreviewTemplateComponentProps) => {
    const [data, setData] = useState<EntrySchema | null>(null)
    useEffect(() => {
      entryParser(entry.getIn(['data']).toJS()).then(setData)
      previewWindow.document.documentElement.classList.add('decapcms-preview')
    }, [entry])
    return data ? callback(data) : <>Chargement…</>
  }
  return PreviewComponent
}
