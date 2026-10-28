/**
 * Builds the embeddable support widget from the React SupportPanel.
 *
 *   yarn build:widgets
 *
 * Output: public/widgets/support.js
 *
 * Source of truth: src/components/support/* (bundled via widgets/support/src/entry.tsx)
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath, pathToFileURL } from 'node:url'
import yaml from 'js-yaml'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const supportDir = path.join(root, 'widgets/support')
const distDir = path.join(supportDir, 'dist')
const cssOut = path.join(distDir, 'widget.css')
const jsOut = path.join(root, 'public/widgets/support.js')

fs.mkdirSync(distDir, { recursive: true })
fs.mkdirSync(path.dirname(jsOut), { recursive: true })

async function loadEsbuild() {
  const candidates = [
    path.join(root, 'node_modules/esbuild'),
    path.join(supportDir, '.vendor/node_modules/esbuild'),
    '/tmp/lasuite-widget-build/node_modules/esbuild',
  ]
  for (const candidate of candidates) {
    const mainJs = path.join(candidate, 'lib/main.js')
    if (fs.existsSync(mainJs)) {
      return import(pathToFileURL(mainJs).href)
    }
  }
  // Last resort: ask npx where esbuild is
  const resolved = execFileSync(
    'npx',
    [
      '--yes',
      '--package',
      'esbuild@0.25.0',
      'node',
      '-e',
      "console.log(require.resolve('esbuild'))",
    ],
    { encoding: 'utf8', cwd: root }
  ).trim()
  return import(pathToFileURL(resolved).href)
}

const { build } = await loadEsbuild()

const tailwindCli = path.join(root, 'node_modules/tailwindcss/lib/cli.js')
if (!fs.existsSync(tailwindCli)) {
  throw new Error('tailwindcss not found — run yarn install')
}

console.log('→ Tailwind CSS (from SupportPanel classes)…')
execFileSync(
  process.execPath,
  [
    tailwindCli,
    '-c',
    path.join(supportDir, 'tailwind.config.ts'),
    '-i',
    path.join(supportDir, 'src/widget-input.css'),
    '-o',
    cssOut,
    '--minify',
  ],
  { cwd: root, stdio: 'inherit' }
)

const yamlPlugin = {
  name: 'yaml',
  setup(buildApi) {
    buildApi.onLoad({ filter: /\.ya?ml$/ }, async (args) => {
      const source = await fs.promises.readFile(args.path, 'utf8')
      const data = yaml.load(source)
      // Embed only support-panel strings — full locale files are for the site.
      return {
        contents: `export default ${JSON.stringify({ support: data?.support ?? {} })}`,
        loader: 'js',
      }
    })
  },
}

const cssTextPlugin = {
  name: 'css-text',
  setup(buildApi) {
    buildApi.onResolve({ filter: /\.css$/ }, (args) => ({
      path: path.isAbsolute(args.path)
        ? args.path
        : path.join(args.resolveDir, args.path),
      namespace: 'css-text',
    }))
    buildApi.onLoad({ filter: /.*/, namespace: 'css-text' }, async (args) => {
      const css = await fs.promises.readFile(args.path, 'utf8')
      return {
        contents: `export default ${JSON.stringify(css)}`,
        loader: 'js',
      }
    })
  },
}

const rawTextPlugin = {
  name: 'raw-text',
  setup(buildApi) {
    buildApi.onResolve({ filter: /\?raw$/ }, (args) => ({
      path: path.isAbsolute(args.path.replace(/\?raw$/, ''))
        ? args.path.replace(/\?raw$/, '')
        : path.join(args.resolveDir, args.path.replace(/\?raw$/, '')),
      namespace: 'raw-text',
    }))
    buildApi.onLoad({ filter: /.*/, namespace: 'raw-text' }, async (args) => {
      const text = await fs.promises.readFile(args.path, 'utf8')
      return {
        contents: `export default ${JSON.stringify(text)}`,
        loader: 'js',
      }
    })
  },
}

function resolveWithExtensions(basePath) {
  const candidates = [
    basePath,
    `${basePath}.tsx`,
    `${basePath}.ts`,
    `${basePath}.jsx`,
    `${basePath}.js`,
    path.join(basePath, 'index.tsx'),
    path.join(basePath, 'index.ts'),
  ]
  return candidates.find((candidate) => fs.existsSync(candidate))
}

const aliasPlugin = {
  name: 'widget-aliases',
  setup(buildApi) {
    buildApi.onResolve({ filter: /^next\/link$/ }, () => ({
      path: path.join(supportDir, 'shims/next-link.tsx'),
    }))
    buildApi.onResolve({ filter: /^next\/script$/ }, () => ({
      path: path.join(supportDir, 'shims/next-script.tsx'),
    }))
    buildApi.onResolve({ filter: /^@\// }, (args) => {
      const resolved = resolveWithExtensions(
        path.join(root, 'src', args.path.slice(2))
      )
      if (!resolved) {
        return { errors: [{ text: `Cannot resolve ${args.path}` }] }
      }
      return { path: resolved }
    })
  },
}

console.log('→ Bundle React SupportPanel → public/widgets/support.js…')
await build({
  entryPoints: [path.join(supportDir, 'src/entry.tsx')],
  outfile: jsOut,
  bundle: true,
  minify: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2018'],
  jsx: 'automatic',
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [aliasPlugin, yamlPlugin, cssTextPlugin, rawTextPlugin],
})

console.log(
  `✓ ${path.relative(root, jsOut)} (${fs.statSync(jsOut).size.toLocaleString()} bytes)`
)
