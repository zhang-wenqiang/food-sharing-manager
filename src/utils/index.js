//所有工具函数在这里导入，然后统一导出
import { http } from "./http"; //axios请求封装
import { setToken, getToken, deleteToken } from "./token";

export { http, setToken, getToken, deleteToken };
