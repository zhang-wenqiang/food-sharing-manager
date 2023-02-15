import { Button } from "antd";

import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { deleteToken } from "../../utils";

function Layout() {
  const { loginStore } = useStore();

  const navigate = useNavigate();

  //按钮点击调用清楚token方法,返回登录页
  const exitButton = () => {
    loginStore.clearToken();
    navigate("/", { replace: true });
  };
  //请理仓库token
  const qToken = () => {
    deleteToken();
  };
  return (
    <div>
      Layout
      <Button type="primary" size="large" onClick={exitButton}>
        退出
      </Button>
      <Button type="primary" size="large" onClick={qToken}>
        清空token
      </Button>
    </div>
  );
}
export default Layout;
