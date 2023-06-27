export interface LoginForm {
  username: string;
  password: string;
}

export interface Response {
  code: number;
  ok: boolean;
  message: string;
}

export interface LoginResponse extends Response {
  data: string;
}

export interface UserInfoResponse extends Response {
  data: {
    routes: string[];
    buttons: string[];
    roles: string[];
    avatar: string;
    name: string;
  };
}
