/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Form, Radio, Button,
} from 'antd';
import 'antd/dist/antd.min.css';
import './SignUp.css';
import axios from 'axios';
import StudentSignUp from '../components/StudentSignUp';
import ParentSignUp from '../components/ParentSignUp';
import TeacherSignUp from '../components/TeacherSignUp';

interface signUpDataInterface {
  name: string,
  email: string,
  mobile: string,
  password: string,
  confPassword: string,
  location: string,
  role: string,
  children: string[],
}

const init = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  confPassword: '',
  location: '',
  role: '',
  children: [''],
};

const SignUpPage: React.FC = () => {
  const [role, setRole] = useState<string>('teacher');
  const [signUpData, setSignUpData] = useState<signUpDataInterface>(init);

  const handleRoleValue: any = (e: any) => {
    setRole(e.target.value);
    init.role = role;
  };

  const addData: any = async (data: signUpDataInterface) => {
    const massage = await axios.post('/api/v1/signup', data);
    console.log(massage);
  };

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setSignUpData({ ...init, [name]: value });
  };

  const addEmailChildren = (emailChildren: string[]): void => {
    init.children = emailChildren;
  };

  return (
    <main id="signUp-main">
      <section id="signUp-intro">
        <div className="bg" />
        <img src="https://i.ibb.co/GTQ9rtg/image-26.png" alt="People" />
        <div className="info">
          <h1>المكان الأنسب للمتابعة والتعلم على الانترنت!</h1>
          <p>من خلال منصتنا يمكنك متابعة الطالب سواء كنت ولي أمر أم معلم، من خلال وضع جميع المعلومات تحت هين الجميع هنا.</p>
        </div>
      </section>
      <section id="signUp-form">
        <div>
          <div>
            <h1>إنشاء حساب</h1>
            <p>موقع شامل وكامل من خلاله يمكنك إدارة كل شي يخص الطالب!</p>
          </div>
          <div className="form">
            <Form.Item label="أنسب وصف لك:" className="xz">
              <Radio.Group defaultValue="teacher">
                <Radio value="teacher" onClick={handleRoleValue}>معلم</Radio>
                <Radio value="student" onClick={handleRoleValue}>طالب</Radio>
                <Radio value="parent" onClick={handleRoleValue}>ولي أمر</Radio>
              </Radio.Group>
            </Form.Item>
            {role === 'student'
              ? <StudentSignUp inputValue={inputValue} />
              : role === 'teacher'
                ? <TeacherSignUp inputValue={inputValue} />
                : <ParentSignUp inputValue={inputValue} addEmailChildren={addEmailChildren} />}
            <Button type="primary" style={{ background: 'linear-gradient(180deg, #13B9DE 0%, #0A8DB6 100%)', width: '30%' }} onClick={() => addData(signUpData)}>تسجيل حساب جديد</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
