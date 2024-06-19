import { promises as fs } from 'fs'
import path from 'path'
import { FolderCollection } from './types'

/**
 * get all the slugs for a folder collection
 *
 * useful for getStaticPaths in next.js pages
 *
 * @param collection collection object created with `createCollection`
 * @param locale (optional) current locale
 * @returns array of slugs (in a promise)
 */
export const getSlugs = async (
  collection: FolderCollection<any>,
  locale = 'fr'
) => {
  if (!collection.config.folder) {
    return []
  }
  const slugs = await fs
    .readdir(path.join(process.cwd(), collection.config.folder, locale))
    .then((files) =>
      files
        .filter((file) => file.endsWith('.yml'))
        .map((file) => file.replace(/\.yml$/, ''))
    )

  return slugs
}
