import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';
import { icons } from '@iconify-json/simple-line-icons';

const safelist = [
  // ...['magnifier', 'arrow-right'].map((v) => `i-simple-line-icons-${v}`),
  ...Object.keys(icons.icons).map((name) => `i-${icons.prefix}-${name}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
    ],
    // variants: [
    //   {
    //     match: (s) => {
    //       if (s.startsWith('u-')) {
    //         return {
    //           matcher: s,
    //           selector: (s) => {
    //             console.log(`${s.slice(1)},${s}`);
    //             return s.startsWith('.') ? `${s.slice(1)},${s}` : s;
    //           },
    //         };
    //       }
    //     },
    //   },
    // ],
  });
