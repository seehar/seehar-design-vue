import fs from 'fs'

fs.mkdirSync('./lib/theme', { recursive: true })
fs.copyFileSync('./packages/theme/full.ts', './lib/theme/full.ts')
fs.copyFileSync('./packages/theme/full.ts', './lib/theme/full.js')
fs.copyFileSync('./packages/theme/light.ts', './lib/theme/light.ts')
fs.copyFileSync('./packages/theme/light.ts', './lib/theme/light.js')
fs.copyFileSync('./packages/theme/dark.ts', './lib/theme/dark.ts')
fs.copyFileSync('./packages/theme/dark.ts', './lib/theme/dark.js')
