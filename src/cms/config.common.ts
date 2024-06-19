import type { CmsConfig } from 'decap-cms-core'
import collections from './collections'

const config: Omit<CmsConfig, 'backend'> = {
  load_config_file: false,
  site_url: '/',
  media_folder: 'public/content/uploads',
  public_folder: '/content/uploads',
  locale: 'fr',
  i18n: {
    structure: 'multiple_folders',
    locales: ['fr', 'de', 'en'],
    default_locale: 'fr',
  },
  collections: [
    {
      label: 'Pages spécifiques',
      name: 'custom-pages',
      i18n: {
        structure: 'single_file',
        locales: ['fr', 'de', 'en'],
        default_locale: 'fr',
      },
      files: collections.fileCollections.map((c) => c.config),
    },
    ...collections.folderCollections.map((c) => c.config),
  ],
}

export default config
