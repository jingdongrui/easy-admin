import vue from '@vitejs/plugin-vue'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export function createVitePlugins() {
  return [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
        ElementPlusResolver(),
      ],
    }),
    Icons({
      defaultClass: 'inline-block',
      compiler: 'vue3',
      customCollections: {
        'svg-icons': FileSystemIconLoader('src/assets/svg-icons', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" width="1.2em" height="1.2em"')),
      },
      scale: 1,
    }),

  ]
}
