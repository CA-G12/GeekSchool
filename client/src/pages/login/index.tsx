import React from "react";
import { Button, Form, Input, message } from "antd";
import "../signUp/style.css";
import axios from "axios";

const LoginPage: React.FC = () => {
  const source = axios.CancelToken.source();

  const onFinish = async (fieldValues: any) => {
    try {
      const loginMsg = await axios.post(
        "/api/v1/auth/login",
        {
          email: fieldValues.email,
          loginPassword: fieldValues.loginPassword,
        },
        { cancelToken: source.token }
      );
      message.success(loginMsg.data.mag);
    } catch (error: any) {
      message.error("error");
    }
  };

  return (
    <main id="signUp-main">
      <section id="signUp-intro">
        <div className="bg" />
        <img src="https://i.ibb.co/GTQ9rtg/image-26.png" alt="People" />
        <div className="info">
          <h1>المكان الأنسب للمتابعة والتعلم على الانترنت!</h1>
          <p>
            من خلال منصتنا يمكنك متابعة الطالب سواء كنت ولي أمر أم معلم، من خلال
            وضع جميع المعلومات تحت هين الجميع هنا.
          </p>
        </div>
      </section>
      <section id="signUp-form">
        <div>
          <div className="welcome-massage">
            <h1>عوداً حميداً</h1>
            <p>موقع شامل وكامل من خلاله يمكنك إدارة كل شي يخص الطالب!</p>
          </div>

          <Form
            className="form"
            name="basic"
            wrapperCol={{ span: 60 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              style={{ width: "100%" }}
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "الرجاء إدخال البريد الالكتروني",
                },
              ]}
            >
              <Input placeholder="البريد الالكتروني" width="100%" />
            </Form.Item>

            <Form.Item
              style={{ width: "100%" }}
              name="loginPassword"
              rules={[
                {
                  min: 5,
                  max: 15,
                  required: true,
                  message: "الرجاء إدخال كلمة المرور",
                },
              ]}
            >
              <Input.Password placeholder="كلمة المرور" width="100%" />
            </Form.Item>

            <Form.Item style={{ width: "100%" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  height: "100%",
                  width: "100%",
                  border: "none",
                  background:
                    "linear-gradient(180deg, #13DE82 0%, #0AB68B 100%)",
                }}
              >
                تسجيل دخول
              </Button>
            </Form.Item>

            <p style={{ width: "100%", textAlign: "left" }}>
              لم تنشئ أي حساب مسبقًا؟{" "}
              <span style={{ color: "#0AB28B" }}>أنشئ حساب</span>
            </p>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
