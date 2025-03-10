import { collection as homepageFile } from './homepage'
import { collection as servicePageCollection } from './service-page'
import { collection as contentPageCollection } from './content-page'

const collections = {
  fileCollections: [homepageFile],
  folderCollections: [servicePageCollection, contentPageCollection],
}

export default collections
