export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'Layout',
    meta: {
      title: '',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      icon: 'Platform',
    },
  },
  {
    path: '/system',
    component: () => import('@/layout/index.vue'),
    name: 'System',
    meta: {
      title: '系统管理',
      icon: 'Setting',
    },
    redirect: '/system/user',
    children: [
      {
        path: '/system/user',
        component: () => import('@/views/system/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
        },
      },
      {
        path: '/system/role',
        component: () => import('@/views/system/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'Avatar',
        },
      },
      {
        path: '/system/navigation',
        component: () => import('@/views/system/navigation/index.vue'),
        name: 'Navigation',
        meta: {
          title: '导航管理',
          icon: 'Memo',
        },
      },
    ],
  },
];
