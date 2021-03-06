import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

export const getPathConfig = (): string => {
  const NODE_ENV = process.env['NODE_ENV'] ?? ''
  const _dirname = dirname(fileURLToPath(import.meta.url))

  let pathConfig: string

  switch (NODE_ENV) {
    case 'production':
      pathConfig = path.join(_dirname, '../../../../.env.production')
      break
    case 'development':
    default:
      pathConfig = path.join(_dirname, '../../../../.env.development')
      break
  }

  return pathConfig
}
