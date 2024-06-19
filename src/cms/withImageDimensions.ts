import probe from 'probe-image-size'
import fs from 'fs'
import path from 'path'

export const withImageDimensions = async <EntrySchema>(data: EntrySchema) => {
  const withImages = structuredClone(data)
  return parseData(withImages)
}

const parseData = async <EntrySchema>(data: EntrySchema) => {
  for (const key in data) {
    const value = data[key]
    if (typeof value === 'object') {
      data[key] = await parseData(data[key])
    }

    // we stumbled upon an image url: add its width/height info
    if (typeof value === 'string' && key === 'image') {
      let imageInfo = null

      // if image is local…
      if (value.startsWith('/')) {
        imageInfo = await probe(
          fs.createReadStream(path.join(process.cwd(), 'public', value))
        )
      }
      // if image is remote…
      if (value.startsWith('http://') || value.startsWith('https://')) {
        imageInfo = await probe(value)
      }

      if (imageInfo) {
        // @ts-ignore
        data[`${key}_object`] = {
          src: value,
          width: imageInfo.width,
          height: imageInfo.height,
        }
      }
    }
  }
  return data
}
