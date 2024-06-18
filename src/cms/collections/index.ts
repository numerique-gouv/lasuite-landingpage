import { collection as homepageFile } from './homepage'
import { collection as landingPageCollection } from './landing-page'
import { collection as contentPageCollection } from './content-page'

const collections = {
  fileCollections: [homepageFile],
  folderCollections: [landingPageCollection, contentPageCollection],
}

export default collections
