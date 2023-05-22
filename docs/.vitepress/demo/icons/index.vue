<template>
  <div class="iconList">
    <div v-for="item in glyphs" :key="item.name" class="iconItem">
      <!-- <k-icon :type="item.name" /> -->
      <component :is="item.name" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const glyphs = [
  {
    icon_id: '88609',
    name: 'copy',
    font_class: 'copy',
    unicode: 'e706',
    unicode_decimal: 59142,
  },
  {
    icon_id: '1494656',
    name: 'liebiao',
    font_class: 'liebiao',
    unicode: 'e60c',
    unicode_decimal: 58892,
  },
  {
    icon_id: '11741024',
    name: 'delete',
    font_class: 'delete',
    unicode: 'e684',
    unicode_decimal: 59012,
  },
  {
    icon_id: '4765743',
    name: 'earth',
    font_class: 'earth',
    unicode: 'e781',
    unicode_decimal: 59265,
  },
  {
    icon_id: '4765811',
    name: 'sync',
    font_class: 'sync',
    unicode: 'e786',
    unicode_decimal: 59270,
  },
  {
    icon_id: '4765837',
    name: 'undo',
    font_class: 'undo',
    unicode: 'e787',
    unicode_decimal: 59271,
  },
  {
    icon_id: '4765838',
    name: 'redo',
    font_class: 'redo',
    unicode: 'e788',
    unicode_decimal: 59272,
  },
  {
    icon_id: '4765896',
    name: 'eye',
    font_class: 'eye',
    unicode: 'e78f',
    unicode_decimal: 59279,
  },
  {
    icon_id: '4766298',
    name: 'linechart',
    font_class: 'linechart',
    unicode: 'e7af',
    unicode_decimal: 59311,
  },
  {
    icon_id: '4766299',
    name: 'barchart',
    font_class: 'barchart',
    unicode: 'e7b0',
    unicode_decimal: 59312,
  },
  {
    icon_id: '4766692',
    name: 'like',
    font_class: 'like1',
    unicode: 'e7c8',
    unicode_decimal: 59336,
  },
  {
    icon_id: '4766693',
    name: 'unlike',
    font_class: 'unlike',
    unicode: 'e7c9',
    unicode_decimal: 59337,
  },
  {
    icon_id: '4766846',
    name: 'folder',
    font_class: 'folder',
    unicode: 'e7d1',
    unicode_decimal: 59345,
  },
  {
    icon_id: '4766847',
    name: 'folder-open',
    font_class: 'folder-open',
    unicode: 'e7d2',
    unicode_decimal: 59346,
  },
  {
    icon_id: '4766951',
    name: 'heart',
    font_class: 'heart',
    unicode: 'e7df',
    unicode_decimal: 59359,
  },
  {
    icon_id: '4766959',
    name: 'edit',
    font_class: 'edit1',
    unicode: 'e7e1',
    unicode_decimal: 59361,
  },
  {
    icon_id: '4767015',
    name: 'fullscreen',
    font_class: 'fullscreen',
    unicode: 'e7ec',
    unicode_decimal: 59372,
  },
  {
    icon_id: '4767016',
    name: 'fullscreen-exit',
    font_class: 'fullscreen-exit',
    unicode: 'e7ed',
    unicode_decimal: 59373,
  },
  {
    icon_id: '4767050',
    name: 'indent',
    font_class: 'indent',
    unicode: 'e7f3',
    unicode_decimal: 59379,
  },
  {
    icon_id: '4767051',
    name: 'outdent',
    font_class: 'outdent',
    unicode: 'e7f4',
    unicode_decimal: 59380,
  },
  {
    icon_id: '4767096',
    name: 'close',
    font_class: 'close1',
    unicode: 'e7fc',
    unicode_decimal: 59388,
  },
  {
    icon_id: '8094805',
    name: 'clear',
    font_class: 'clear',
    unicode: 'e900',
    unicode_decimal: 59648,
  },
  {
    icon_id: '9230691',
    name: 'compress',
    font_class: 'compress',
    unicode: 'e914',
    unicode_decimal: 59668,
  },
  {
    icon_id: '9230692',
    name: 'expend',
    font_class: 'expend',
    unicode: 'e915',
    unicode_decimal: 59669,
  },
  {
    icon_id: '11538076',
    name: 'search',
    font_class: 'search',
    unicode: 'e67c',
    unicode_decimal: 59004,
  },
  {
    icon_id: '27188229',
    name: 'about',
    font_class: 'about',
    unicode: 'e601',
    unicode_decimal: 58881,
  },
  {
    icon_id: '27188230',
    name: 'add',
    font_class: 'add',
    unicode: 'e602',
    unicode_decimal: 58882,
  },
  {
    icon_id: '27188232',
    name: 'arrowleft',
    font_class: 'arrowleft',
    unicode: 'e607',
    unicode_decimal: 58887,
  },
  {
    icon_id: '27188233',
    name: 'addressbook',
    font_class: 'addressbook',
    unicode: 'e608',
    unicode_decimal: 58888,
  },
  {
    icon_id: '27188234',
    name: 'bag',
    font_class: 'bag',
    unicode: 'e609',
    unicode_decimal: 58889,
  },
  {
    icon_id: '27188235',
    name: 'arrowdown',
    font_class: 'arrowdown',
    unicode: 'e60a',
    unicode_decimal: 58890,
  },
  {
    icon_id: '27188238',
    name: 'back',
    font_class: 'back',
    unicode: 'e60b',
    unicode_decimal: 58891,
  },
  {
    icon_id: '27188241',
    name: 'alarm',
    font_class: 'alarm',
    unicode: 'e60d',
    unicode_decimal: 58893,
  },
  {
    icon_id: '27188246',
    name: 'arrowup',
    font_class: 'arrowup',
    unicode: 'e610',
    unicode_decimal: 58896,
  },
  {
    icon_id: '27188247',
    name: 'circle',
    font_class: 'circle',
    unicode: 'e614',
    unicode_decimal: 58900,
  },
  {
    icon_id: '27188249',
    name: 'camera',
    font_class: 'camera',
    unicode: 'e615',
    unicode_decimal: 58901,
  },
  {
    icon_id: '27188250',
    name: 'card',
    font_class: 'card',
    unicode: 'e616',
    unicode_decimal: 58902,
  },
  {
    icon_id: '27188252',
    name: 'arrowright',
    font_class: 'arrowright',
    unicode: 'e617',
    unicode_decimal: 58903,
  },
  {
    icon_id: '27188253',
    name: 'cart',
    font_class: 'cart',
    unicode: 'e618',
    unicode_decimal: 58904,
  },
  {
    icon_id: '27188254',
    name: 'clock',
    font_class: 'clock',
    unicode: 'e61a',
    unicode_decimal: 58906,
  },
  {
    icon_id: '27188256',
    name: 'circle-selected',
    font_class: 'circle-selected',
    unicode: 'e61b',
    unicode_decimal: 58907,
  },
  {
    icon_id: '27188259',
    name: 'calendar',
    font_class: 'calendar',
    unicode: 'e61c',
    unicode_decimal: 58908,
  },
  {
    icon_id: '27188261',
    name: 'close',
    font_class: 'close',
    unicode: 'e61d',
    unicode_decimal: 58909,
  },
  {
    icon_id: '27188267',
    name: 'edit',
    font_class: 'edit',
    unicode: 'e61e',
    unicode_decimal: 58910,
  },
  {
    icon_id: '27188270',
    name: 'check',
    font_class: 'check',
    unicode: 'e620',
    unicode_decimal: 58912,
  },
  {
    icon_id: '27188272',
    name: 'bottom',
    font_class: 'bottom',
    unicode: 'e622',
    unicode_decimal: 58914,
  },
  {
    icon_id: '27188277',
    name: 'explain',
    font_class: 'explain',
    unicode: 'e625',
    unicode_decimal: 58917,
  },
  {
    icon_id: '27188278',
    name: 'deletekey',
    font_class: 'deletekey',
    unicode: 'e626',
    unicode_decimal: 58918,
  },
  {
    icon_id: '27188283',
    name: 'histogram',
    font_class: 'histogram',
    unicode: 'e627',
    unicode_decimal: 58919,
  },
  {
    icon_id: '27188284',
    name: 'friendadd',
    font_class: 'friendadd',
    unicode: 'e628',
    unicode_decimal: 58920,
  },
  {
    icon_id: '27188286',
    name: 'home',
    font_class: 'home',
    unicode: 'e629',
    unicode_decimal: 58921,
  },
  {
    icon_id: '27188289',
    name: 'enlarge',
    font_class: 'enlarge',
    unicode: 'e62a',
    unicode_decimal: 58922,
  },
  {
    icon_id: '27188291',
    name: 'gps',
    font_class: 'gps',
    unicode: 'e62b',
    unicode_decimal: 58923,
  },
  {
    icon_id: '27188293',
    name: 'feedback',
    font_class: 'feedback',
    unicode: 'e62c',
    unicode_decimal: 58924,
  },
  {
    icon_id: '27188294',
    name: 'exchange',
    font_class: 'exchange',
    unicode: 'e62d',
    unicode_decimal: 58925,
  },
  {
    icon_id: '27188297',
    name: 'link',
    font_class: 'link',
    unicode: 'e62e',
    unicode_decimal: 58926,
  },
  {
    icon_id: '27188300',
    name: 'like',
    font_class: 'like',
    unicode: 'e62f',
    unicode_decimal: 58927,
  },
  {
    icon_id: '27188301',
    name: 'mail',
    font_class: 'mail',
    unicode: 'e630',
    unicode_decimal: 58928,
  },
  {
    icon_id: '27188302',
    name: 'manage',
    font_class: 'manage',
    unicode: 'e631',
    unicode_decimal: 58929,
  },
  {
    icon_id: '27188310',
    name: 'narrow',
    font_class: 'narrow',
    unicode: 'e632',
    unicode_decimal: 58930,
  },
  {
    icon_id: '27188321',
    name: 'listview',
    font_class: 'listview',
    unicode: 'e633',
    unicode_decimal: 58931,
  },
  {
    icon_id: '27188328',
    name: 'more',
    font_class: 'more',
    unicode: 'e634',
    unicode_decimal: 58932,
  },
  {
    icon_id: '27188332',
    name: 'message',
    font_class: 'message',
    unicode: 'e636',
    unicode_decimal: 58934,
  },
  {
    icon_id: '27188333',
    name: 'order',
    font_class: 'order',
    unicode: 'e637',
    unicode_decimal: 58935,
  },
  {
    icon_id: '27188334',
    name: 'people',
    font_class: 'people',
    unicode: 'e638',
    unicode_decimal: 58936,
  },
  {
    icon_id: '27188335',
    name: 'pie',
    font_class: 'pie',
    unicode: 'e639',
    unicode_decimal: 58937,
  },
  {
    icon_id: '27188337',
    name: 'picture',
    font_class: 'picture',
    unicode: 'e63a',
    unicode_decimal: 58938,
  },
  {
    icon_id: '27188338',
    name: 'partake',
    font_class: 'partake',
    unicode: 'e63b',
    unicode_decimal: 58939,
  },
  {
    icon_id: '27188340',
    name: 'notice',
    font_class: 'notice',
    unicode: 'e63c',
    unicode_decimal: 58940,
  },
  {
    icon_id: '27188342',
    name: 'plus',
    font_class: 'plus',
    unicode: 'e63d',
    unicode_decimal: 58941,
  },
  {
    icon_id: '27188346',
    name: 'pwd',
    font_class: 'pwd',
    unicode: 'e63e',
    unicode_decimal: 58942,
  },
  {
    icon_id: '27188353',
    name: 'setup',
    font_class: 'setup',
    unicode: 'e640',
    unicode_decimal: 58944,
  },
  {
    icon_id: '27188354',
    name: 'share',
    font_class: 'share',
    unicode: 'e641',
    unicode_decimal: 58945,
  },
  {
    icon_id: '27188356',
    name: 'screen',
    font_class: 'screen',
    unicode: 'e642',
    unicode_decimal: 58946,
  },
  {
    icon_id: '27188371',
    name: 'star',
    font_class: 'star',
    unicode: 'e643',
    unicode_decimal: 58947,
  },
  {
    icon_id: '27188373',
    name: 'top',
    font_class: 'top',
    unicode: 'e644',
    unicode_decimal: 58948,
  },
  {
    icon_id: '27188374',
    name: 'skin',
    font_class: 'skin',
    unicode: 'e645',
    unicode_decimal: 58949,
  },
  {
    icon_id: '27188376',
    name: 'sweep',
    font_class: 'sweep',
    unicode: 'e646',
    unicode_decimal: 58950,
  },
  {
    icon_id: '27188380',
    name: 'shut',
    font_class: 'shut',
    unicode: 'e647',
    unicode_decimal: 58951,
  },
  {
    icon_id: '27188389',
    name: 'voice',
    font_class: 'voice',
    unicode: 'e64b',
    unicode_decimal: 58955,
  },
  {
    icon_id: '27188390',
    name: 'success',
    font_class: 'success',
    unicode: 'e64b',
    unicode_decimal: 58955,
  },
  {
    icon_id: '27188391',
    name: 'error',
    font_class: 'error',
    unicode: 'e64b',
    unicode_decimal: 58955,
  },
  {
    icon_id: '27188392',
    name: 'warning',
    font_class: 'warning',
    unicode: 'e64b',
    unicode_decimal: 58955,
  },
  {
    icon_id: '27188393',
    name: 'info',
    font_class: 'info',
    unicode: 'e64b',
    unicode_decimal: 58955,
  },
];
</script>

<style lang="scss" scoped>
.iconList {
  display: grid;
  grid-template-columns: repeat(auto-fill, 16.6%);
  max-width: 814px;
  // grid-template-rows: repeat(16, 120px);
  // grid-row-gap: 1px;
  // grid-column-gap: 1px;
  // border: 1px solid var(--block-border-color);
  // background-color: var(--block-border-color);
  .iconItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 120px;
    background-color: var(--vp-sidebar-bg-color);
    box-sizing: border-box;
    border: 1px solid var(--block-border-color);
    span {
      font-size: 14px;
    }
    &:hover {
      background-color: #2fd3bd2a;
    }
  }
  svg[id*='icon'] {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
