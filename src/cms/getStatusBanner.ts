import type { GetStaticProps } from 'next'
import { getFileEntry } from './getEntry'
import {
  statusBannerCollections,
  type EntrySchema as StatusBannerEntry,
  type StatusBannerProduct,
} from './collections/status-banner'

export type StatusBannerPageProps = {
  statusBanner: StatusBannerEntry | null
}

/**
 * build a `getStaticProps` that loads the CMS status banner of a product page.
 * returns `statusBanner: null` when the banner is disabled, empty or missing.
 *
 * usage in a page: `export const getStaticProps = getStatusBannerStaticProps('docs')`
 */
export const getStatusBannerStaticProps =
  (product: StatusBannerProduct): GetStaticProps<StatusBannerPageProps> =>
  async ({ locale = 'fr' }) => {
    let banner: StatusBannerEntry | null = null
    try {
      banner = await getFileEntry(statusBannerCollections[product], locale)
    } catch (error) {
      banner = null
    }
    return {
      props: {
        // JSON round-trip drops `undefined` values, which Next can't serialize
        statusBanner:
          banner?.enabled && banner.message
            ? JSON.parse(JSON.stringify(banner))
            : null,
      },
    }
  }
