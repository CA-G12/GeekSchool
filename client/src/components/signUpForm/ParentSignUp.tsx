/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddChild from "./AddChild";
import { userDataParentInterface } from "../../interfaces";

const ParentSignUp: React.ElementType = ({
  inputValue,
  addEmailChildren,
}: userDataParentInterface) => {
  const [emails, setEmail] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState<string>("");

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
      <Input
        placeholder="البريد الإلكتروني"
        name="email"
        onChange={inputValue}
      />
      <Input.Password
        placeholder="كلمة المرور"
        name="password"
        onChange={inputValue}
      />
      <Input.Password
        placeholder="تأكيد كلمة المرور"
        name="confPassword"
        onChange={inputValue}
      />
      <Input placeholder="رقم الهاتف" name="mobile" onChange={inputValue} />
      <Input placeholder="العنوان" name="location" onChange={inputValue} />
      <div className="add-child">
        <Input
          placeholder="البريد الإلكتروني للأبناء"
          onChange={emailChange}
          style={{ height: "100%", width: "89%" }}
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={addEmail}
          style={{
            height: "100%",
            width: "8%",
            background: "#13B9DE",
            border: 0,
          }}
        />
      </div>
      {emails.map((e: String, index: number) => (
        <AddChild
          key={e}
          email={e}
          index={index}
          deleteChildEmail={deleteChildEmail}
        />
      ))}
    </>
  );
};

export default ParentSignUp;
