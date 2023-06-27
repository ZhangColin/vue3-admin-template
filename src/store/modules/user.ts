import { defineStore } from 'pinia';
import { reqLogin, reqUserInfo, reqUserLogout as reqLogout } from '@/api/user';
import { LoginForm, LoginResponse, UserInfoResponse } from '@/api/user/type';
import { UserState } from './types/type';
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from '@/utils/token';
// import { ElMessage } from 'element-plus';

import { constantRoute } from '@/router/routes';

const useUserStore = defineStore('UserStore', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    };
  },
  actions: {
    async userLogin(data: LoginForm) {
      const result: LoginResponse = await reqLogin(data);
      if (result.code === 200) {
        this.token = result.data;
        SET_TOKEN(result.data);

        return 'OK';
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    async userLogout() {
      await reqLogout();
      this.token = '';
      REMOVE_TOKEN();

      this.username = '';
      this.avatar = '';
    },
    async userInfo() {
      const result: UserInfoResponse = await reqUserInfo();

      if (result.code === 200) {
        this.username = result.data.name;
        this.avatar = result.data.avatar;
        return 'ok';
      } else {
        // ElMessage({
        //   type: 'error',
        //   message: result.message,
        // });
        return Promise.reject(new Error(result.message));
      }
    },
  },
  getters: {},
});

export default useUserStore;
