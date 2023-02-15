//登录页面数据管理

import { makeAutoObservable } from "mobx";
import { getToken, http, setToken } from "../utils";

class LoginStore {
  token = JSON.parse(getToken()) || null;

  constructor() {
    //响应式处理
    makeAutoObservable(this);
  }

  //操作token的方法,异步
  getToken = async (url, { username, password }) => {
    //封装请求参数
    let params = new URLSearchParams();
    params.append(
      "params",
      JSON.stringify({
        username: username,
        password: password,
      })
    );

    //调用登录接口
    const res = await http.post(url, params);

    //用户信息存入token
    this.token = res.data;

    //token存入本地仓库
    setToken(JSON.stringify(res.data));
  };

  //清空token
  clearToken = () => {
    this.token = null;
    //deleteToken();
  };
}

export default LoginStore;
