import type { CmsConfig } from 'decap-cms-core'
import config from './config.common'

const prodConfig: CmsConfig = {
  ...config,
  backend: {
    name: 'github',
    repo: 'numerique-gouv/lasuite-landingpage',
    branch: process.env.NEXT_PUBLIC_CMS_BRANCH,
    base_url: process.env.NEXT_PUBLIC_CMS_AUTH_URL,
    commit_messages: {
      create: '💬(cms) create {{collection}} “{{slug}}”',
      update: '💬(cms) update {{collection}} “{{slug}}”',
      delete: '💬(cms) delete {{collection}} “{{slug}}”',
      uploadMedia: '💬(cms) upload “{{path}}”',
      deleteMedia: '💬(cms) delete “{{path}}”',
      openAuthoring: '💬(cms) {{message}}',
    },
  },
}

export default prodConfig
