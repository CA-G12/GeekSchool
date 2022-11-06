import React, { useEffect, useState } from "react";
import { Input, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddChild from "./AddChild";
import { userDataParentInterface } from "../../interfaces";

const ParentSignUp: React.ElementType = ({
  inputValue,
  addEmailChildren,
}: userDataParentInterface) => {
  // regex validation email for email children input
  const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const [emails, setEmail] = useState<string[] | []>([]);
  const [emailInput, setEmailInput] = useState<string>("");

  const handleAddEmail = (): void => {
    if (emailInput !== "" && regex.test(emailInput)) {
      setEmail([emailInput, ...emails]);
    } else {
      message.error("Child email required or not an email ");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailInput(e.target.value);
  };

  useEffect(() => {
    addEmailChildren(emails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emails]);

  const handleDeleteChildEmail = (indexDiv: number): void => {
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
          onChange={handleEmailChange}
          style={{ height: "100%", width: "89%" }}
        />
        <Button
          type="primary"
          icon={<PlusOutlined style={{ fontSize: "1.2rem" }} />}
          onClick={handleAddEmail}
          style={{
            background: "#13B9DE",
            border: 0,
          }}
        />
      </div>
      <div className="child-cont">
        {emails.map((e: String, index: number) => (
          <AddChild
            key={e}
            email={e}
            index={index}
            deleteChildEmail={handleDeleteChildEmail}
          />
        ))}
      </div>
    </>
  );
};

export default ParentSignUp;
