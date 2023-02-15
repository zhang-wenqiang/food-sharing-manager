//所有store数据统一处理，导出

import { createContext, useContext } from "react";
import LoginStore from "./login.Store";

class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
  }
}

const rootStore = new RootStore();

const context = createContext(rootStore);

const useStore = () => useContext(context);
export { useStore };
