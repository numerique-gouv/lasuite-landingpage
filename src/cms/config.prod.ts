import type { CmsConfig } from 'decap-cms-core'
import config from './config.common'

const prodConfig: CmsConfig = {
  ...config,
  backend: {
    name: 'github',
    repo: 'numerique-gouv/lasuite-landingpage',
    branch: 'main',
    base_url: process.env.NEXT_PUBLIC_CMS_AUTH_URL,
  },
}

export default prodConfig
