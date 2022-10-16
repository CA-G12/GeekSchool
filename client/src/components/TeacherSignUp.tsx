import React from 'react';
import { Input } from 'antd';

interface user {
  inputValue: () =>{},
}

const TeacherSignUp: React.ElementType = ({ inputValue }: user) => (
  <>
    <Input placeholder="الاسم رباعي" name="name" onChange={inputValue} />
    <Input placeholder="البريد الإلكتروني" name="email" onChange={inputValue} />
    <Input placeholder="كلمة المرور" name="password" onChange={inputValue} />
    <Input placeholder="تأكيد كلمة المرور" name="confPassword" onChange={inputValue} />
    <Input placeholder="رقم الهاتف" name="mobile" onChange={inputValue} />
    <Input placeholder="العنوان" name="location" onChange={inputValue} />
  </>
);

export default TeacherSignUp;
