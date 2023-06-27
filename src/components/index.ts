import { App } from 'vue';
import SvgIcon from './SvgIcon/index.vue';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const globalComponents = { SvgIcon };

export default {
  install(app: App) {
    for (const [key, component] of Object.entries(globalComponents)) {
      app.component(key, component);
    }
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
