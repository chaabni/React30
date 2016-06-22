import path from 'path'

export const id = 1
export const port = parseInt(process.env.PORT, 10) || 5000
export const webpackConfig = require('../../webpack.config')
export const statsFile = path.resolve(__dirname, '../../stats.json')
export const publicDir = path.resolve(__dirname, '../../public')
export const timeout = parseInt(process.env.TIMEOUT, 10) || 20000
