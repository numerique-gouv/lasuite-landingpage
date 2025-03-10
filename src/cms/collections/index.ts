import { collection as servicePageCollection } from './service-page'
import { collection as contentPageCollection } from './content-page'
import { FileCollection, FolderCollection } from '@/cms/types'

const collections: {
  fileCollections: FileCollection<any>[]
  folderCollections: FolderCollection<any>[]
} = {
  fileCollections: [],
  folderCollections: [servicePageCollection, contentPageCollection],
}

export default collections
