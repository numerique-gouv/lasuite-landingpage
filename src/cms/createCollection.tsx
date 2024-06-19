import { useState, useEffect } from 'react'
import type {
  CmsCollection,
  CmsCollectionFile,
  PreviewTemplateComponentProps,
} from 'decap-cms-core'
import type { Collection, FileCollection, FolderCollection } from './types'

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
export function createCollection<EntrySchema>(
  params: CollectionParams<EntrySchema> & { config: CmsCollectionFile }
): FileCollection<EntrySchema>
export function createCollection<EntrySchema>(
  params: CollectionParams<EntrySchema> & { config: CmsCollection }
): FolderCollection<EntrySchema>
export function createCollection<EntrySchema>({
  config,
  entryParser,
  entryPreview,
}: CollectionParams<EntrySchema>): Collection<EntrySchema> {
  const EntryPreview = createPreviewComponent<EntrySchema>(
    entryParser,
    entryPreview
  )

  const collection = {
    config,
    entryParser,
    EntryPreview,
  }

  return isFileCollection(config)
    ? (collection as FileCollection<EntrySchema>)
    : (collection as FolderCollection<EntrySchema>)
}

const isFileCollection = (
  config: CmsCollection | CmsCollectionFile
): config is CmsCollectionFile => {
  return 'file' in config
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
