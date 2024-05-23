import type { CmsConfig } from 'decap-cms-core'
import config from './config.common'

const devConfig: CmsConfig = {
  ...config,
  local_backend: true,
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
}

export default devConfig
