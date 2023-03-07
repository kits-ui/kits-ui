# 快速上手

## 完整引入

在 main.js 或 main.ts 中引入下面内容

```js
import { createApp } from 'vue';
import App from './App.vue';

import kitsUi from 'kits-ui';
import '@kits-ui/theme';

createApp(App).use(kitsUi).mount('#app');
```
