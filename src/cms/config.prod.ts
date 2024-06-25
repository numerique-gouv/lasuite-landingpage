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
      create: '💬(cms-bot) create {{collection}} “{{slug}}”',
      update: '💬(cms-bot) update {{collection}} “{{slug}}”',
      delete: '💬(cms-bot) delete {{collection}} “{{slug}}”',
      uploadMedia: '💬(cms-bot) upload “{{path}}”',
      deleteMedia: '💬(cms-bot) delete “{{path}}”',
      openAuthoring: '💬(cms-bot) {{message}}',
    },
  },
}

export default prodConfig
