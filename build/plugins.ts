import vue from '@vitejs/plugin-vue';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

export const createVitePlugins = () => {
  return [
    vue(),
    // 自动注册图标组件
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon', // 👈 会生成 <icon-park-outline-apple /> 形式的组件名
        }),
      ],
    }),
    Icons({
      defaultClass: 'inline-block',
      compiler: 'vue3',
      customCollections: {
        'svg-icons': FileSystemIconLoader('src/assets/svg-icons', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" width="1.2em" height="1.2em"'),
        ),
      },
      scale: 1,
    }),
  ];
};
