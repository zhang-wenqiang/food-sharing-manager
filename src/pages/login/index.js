import { Card } from "antd";
import './index.scss';
import loginBackground from "../../assets/logo.png";

function Login() {
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={loginBackground} alt="" />
        {/* 登录表单 */}
      </Card>
    </div>
  );
}
export default Login;
