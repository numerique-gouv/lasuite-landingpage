import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkUnwrapImages from 'remark-unwrap-images'
import { rehypeImageLinks } from '@bradgarropy/rehype-image-links'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import allConstants from '@/constant'

export const toHtml = async (markdown: string, { inline = false } = {}) => {
  const data = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkUnwrapImages)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeImageLinks)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)

  let result = String(data)

  // replace constants
  Object.entries(allConstants).forEach(([key, value]) => {
    result = result.replace(new RegExp(`{${key}}`, 'g'), value)
  })

  // dirty way of checking for loney <p> tags: I don't have the time to better check the remark API
  const isOneP =
    inline &&
    result.startsWith('<p>') &&
    result.endsWith('</p>') &&
    (result.match(/<p>/g) || []).length === 1
  if (isOneP) {
    return result.slice(3, -4)
  }

  return result
}
