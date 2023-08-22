import DefineOptions from 'unplugin-vue-define-options/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { getSrcPath } from '../utils'

const srcPath = getSrcPath()
const customIconPath = `${srcPath}/assets/svg-icons`
export default [
  DefineOptions(),
  Components({
    types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    resolvers: [
      NaiveUiResolver(),
      IconResolver({
        prefix: 'icon'
      })
    ]
  }),
  Icons({
    compiler: 'vue3',
    scale: 1,
    defaultClass: 'inline-block',
    customCollections: {
      custom: FileSystemIconLoader(customIconPath)
    }
  }),
  createSvgIconsPlugin({
    iconDirs: [customIconPath],
    symbolId: 'icon-local[dir]-[name]',
    inject: 'body-last',
    customDomId: '__CUSTOM_SVG_ICON__'
  })
]