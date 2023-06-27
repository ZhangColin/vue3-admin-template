import { createApp } from 'vue';
import App from '@/App.vue';

// 引入 element-plus 插件与样式
import ElementPlus from 'element-plus';
//@ts-expect-error: import locale package
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'element-plus/dist/index.css';

import 'virtual:svg-icons-register';

import globalComponent from '@/components';
import router from './router';
import pinia from './store';

// 获取应用实例对象
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(router);
app.use(globalComponent);
app.use(pinia);

import '@/styles/index.scss';
import '@/permisstion';

// 将应用挂载到挂载点上
app.mount('#app');
