/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import AddChild from './AddChild';

interface user {
  inputValue: () => {},
  /* eslint-disable no-unused-vars */
  addEmailChildren: (emails: string[]) => {},
}

const ParentSignUp: React.ElementType = ({ inputValue, addEmailChildren }: user) => {
  const [emails, setEmail] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState<string>('');

  const addEmail = (): void => {
    setEmail([emailInput, ...emails]);
  };

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailInput(e.target.value);
  };

  useEffect(() => {
    addEmailChildren(emails);
  }, [addEmailChildren, emails]);

  const deleteChildEmail = (indexDiv: number): void => {
    const newEmails = emails.filter((e, index: number) => index !== indexDiv);
    setEmail(newEmails);
  };

  return (
    <>
      <Input placeholder="الاسم رباعي" name="name" onChange={inputValue} />
      <Input placeholder="البريد الإلكتروني" name="email" onChange={inputValue} />
      <Input placeholder="كلمة المرور" name="password" onChange={inputValue} />
      <Input placeholder="تأكيد كلمة المرور" name="confPassword" onChange={inputValue} />
      <Input placeholder="رقم الهاتف" name="mobile" onChange={inputValue} />
      <Input placeholder="العنوان" name="location" onChange={inputValue} />
      <Input placeholder="البريد الإلكتروني للأبناء" onChange={emailChange} />
      <UserAddOutlined onClick={addEmail} />
      {emails.map((e: String, index: number) => <AddChild key={e} email={e} index={index} deleteChildEmail={deleteChildEmail} />)}
    </>
  );
};

export default ParentSignUp;
