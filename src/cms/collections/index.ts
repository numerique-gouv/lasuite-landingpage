import { collection as servicePageCollection } from './service-page'
import { collection as contentPageCollection } from './content-page'
import { collection as legalDocsPageCollection } from './legal-docs-page'
import { collection as tchapBannerCollection } from './tchap-banner'
import { FileCollection, FolderCollection } from '@/cms/types'

const collections: {
  fileCollections: FileCollection<any>[]
  folderCollections: FolderCollection<any>[]
} = {
  fileCollections: [tchapBannerCollection],
  folderCollections: [
    servicePageCollection,
    contentPageCollection,
    legalDocsPageCollection,
  ],
}

export default collections
