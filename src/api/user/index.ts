import request from '@/utils/request';

import { LoginForm, LoginResponse, UserInfoResponse } from './type';

enum API {
  // LOGIN_URL = '/user/login',
  LOGIN_URL = '/admin/acl/index/login',
  // USERINFO_URL = '/user/info',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: LoginForm) =>
  request.post<LoginForm, LoginResponse>(API.LOGIN_URL, data);
export const reqUserInfo = () =>
  request.get<any, UserInfoResponse>(API.USERINFO_URL);
export const reqUserLogout = () => request.post<any, any>(API.LOGOUT_URL);
