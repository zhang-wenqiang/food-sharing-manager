import { Card, Button, Checkbox, Form, Input, message } from "antd";
import "./index.scss";
import loginBackground from "../../assets/logo.png";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginStore } = useStore();
  const navigate = useNavigate();
  const onFinish = async (values) => { //values：表单提交的信息
    
    //跳转首页，做出提示
    try {
      await loginStore.getToken("/user/hello", values);
      navigate("/layout", { replace: true });
      message.success("登录成功", 1);
    } catch (error) {
      message.error("登录失败" + error, 1);
    }
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={loginBackground} alt="" />
        {/* 登录表单 */}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger={["onBlur", "onChange"]}
        >
          <Form.Item
            label="手机号"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入手机号!",
              },
              {
                pattern:
                  /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/,
                message: "手机号不合法",
                validateTrigger: "onBlur",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default Login;
