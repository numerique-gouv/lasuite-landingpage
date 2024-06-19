import { promises as fs } from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import type { FileCollection, FolderCollection } from './types'

/**
 * retrieve content from a cms yaml file
 *
 * @param collection collection object created with `createCollection`
 * @param slug (optional) for a folder collection, pass the slug of the entry you want to retrieve
 * @returns an object representing the content of the file, with ready-to-use (transformed) data
 */
export const getCollectionEntry = async <EntrySchema>(
  collection: FolderCollection<EntrySchema>,
  slug: string,
  locale: string = 'fr'
) => {
  const data = await getFileContent(
    `${collection.config.folder}/${locale}/${slug}.yml`
  )
  return collection.entryParser(data as EntrySchema)
}

export const getFileEntry = async <EntrySchema>(
  collection: FileCollection<EntrySchema>,
  locale: string = 'fr'
) => {
  const content = await getFileContent(collection.config.file)
  return collection.entryParser(
    (content as Record<string, EntrySchema>)[locale]
  )
}

const getFileContent = async (filepath: string) => {
  let fileContent
  try {
    fileContent = await fs.readFile(path.join(process.cwd(), filepath), 'utf8')
  } catch (error) {
    throw Error(`No data found for ${filepath}`)
  }

  let data
  try {
    data = yaml.load(fileContent)
  } catch (error) {
    console.log(error)

    throw Error(`Error parsing ${filepath} file`)
  }

  return data
}
