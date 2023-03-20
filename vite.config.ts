import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import unocss from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import presetChinese from 'unocss-preset-chinese'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss({
      presets: [
        presetUno(),
        presetIcons({ extraProperties: { display: 'inline-block', 'vertical-align': 'middle' } }),
        presetWeapp(),
        presetChinese(),
      ],
      transformers: [transformerAttributify(), transformerClass()],
      shortcuts: {
        'flex-center': 'justify-center items-center',
      },
    }),
    uni(),
  ],
})
