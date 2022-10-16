import React from 'react';
import { Input } from 'antd';

interface user {
  inputValue: ()=>{}
}

const StudentSignUp: React.ElementType = ({ inputValue }: user) => (
  <>
    <Input placeholder="الاسم رباعي" name="name" onChange={inputValue} />
    <Input placeholder="البريد الإلكتروني" name="email" onChange={inputValue} />
    <Input placeholder="كلمة المرور" name="password" onChange={inputValue} />
    <Input placeholder="تأكيد كلمة المرور" name="confPassword" onChange={inputValue} />
  </>
);
export default StudentSignUp;
