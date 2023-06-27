import router from '@/router';
import setting from './setting';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
nprogress.configure({ showSpinner: false });

import pinia from './store';
import useUserStore from './store/modules/user';

const userStore = useUserStore(pinia);

router.beforeEach(async (to: any, from: any, next: any) => {
  nprogress.start();

  if (userStore.token) {
    if (to.path == '/login') {
      next({ path: '/' });
    } else {
      if (!userStore.username) {
        try {
          await userStore.userInfo();
        } catch (error) {
          await userStore.userLogout();
          next({ path: '/login', query: { redirect: to.path } });
        }
      }
      document.title = `${setting.title} - ${to.meta.title}`;
      next();
    }
  } else {
    if (to.path == '/login') {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
  }
});

router.afterEach((to: any, from: any) => {
  nprogress.done();
});
