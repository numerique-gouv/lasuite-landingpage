import type {
  CmsCollection,
  CmsCollectionFile,
  PreviewTemplateComponentProps,
} from 'decap-cms-core'

type BaseCollection<Schema> = {
  /**
   * takes a raw cms entry data and returns parsed data
   *
   * usually transforms markdown to html
   * @param data entry data
   * @returns parsed data (in a promise)
   */
  entryParser: (data: Schema) => Promise<Schema>
  /**
   * React component meant to be used as a DecapCMS preview template
   */
  EntryPreview: ({ entry }: PreviewTemplateComponentProps) => JSX.Element
}

export type FolderCollection<Schema> = BaseCollection<Schema> & {
  /**
   * DecapCMS folder collection configuration
   */
  config: CmsCollection
}

export type FileCollection<Schema> = BaseCollection<Schema> & {
  /**
   * DecapCMS file collection configuration
   */
  config: CmsCollectionFile
}

export type Collection<Schema> =
  | FolderCollection<Schema>
  | FileCollection<Schema>

export type EntryImage = {
  image: string
  image_object?: {
    src: string
    width?: number
    height?: number
    fill?: true
  }
}
