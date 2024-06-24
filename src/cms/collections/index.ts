import { collection as homepageFile } from './homepage'
import { collection as communsFile } from './communs'
import { collection as servicePageCollection } from './service-page'
import { collection as contentPageCollection } from './content-page'

const collections = {
  fileCollections: [homepageFile, communsFile],
  folderCollections: [servicePageCollection, contentPageCollection],
}

export default collections
