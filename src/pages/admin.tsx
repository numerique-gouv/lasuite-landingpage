import dynamic from 'next/dynamic'
import collections from '@/cms/collections'
import type { CMS, CmsConfig } from 'decap-cms-core'

const CMS = dynamic(
  // @ts-ignore
  async () => {
    let config: CmsConfig
    // @ts-ignore
    window.CMS_MANUAL_INIT = true
    if (process.env.NODE_ENV === 'production') {
      config = (await import('@/cms/config.prod')).default
    } else {
      config = (await import('@/cms/config.dev')).default
    }

    return import('decap-cms-app').then((cms) => {
      const CMS = cms as unknown as CMS
      CMS.init({ config })
      ;[
        ...collections.fileCollections,
        ...collections.folderCollections,
      ].forEach((c) =>
        CMS.registerPreviewTemplate(c.config.name, c.EntryPreview)
      )
      CMS.registerPreviewStyle(`:root { --font-marianne: 'Marianne'; }`, {
        raw: true,
      })
      CMS.registerPreviewStyle('/assets/cms/globals.css')
      CMS.registerPreviewStyle('/assets/cms/dsfr/dsfr.min.css')
    })
  },
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          display: 'flex',
          height: '100dvh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ padding: '1rem' }}>Chargement…</p>
      </div>
    ),
  }
)

export default function Admin() {
  return <CMS />
}
