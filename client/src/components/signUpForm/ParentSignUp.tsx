import React, { useEffect, useState } from "react";
import { Input, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import AddChild from "./AddChild";
import { userDataParentInterface } from "../../interfaces";

const ParentSignUp: React.ElementType = ({
  inputValue,
  addEmailChildren,
  setIsOk,
}: userDataParentInterface) => {
  // regex validation email for email children input
  const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const [emails, setEmail] = useState<string[] | []>([]);
  const [emailInput, setEmailInput] = useState<string>("");

  const handleEmailInput = (elm: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = elm.target.value;
    const checkNewEmailIfExist = emails.filter((e) => e === newEmail).length;
    if (!checkNewEmailIfExist) {
      setEmailInput(newEmail);
    }
  };

  const handleEmailChange = async (email: string): Promise<any> => {
    const checkNewEmailIfExist = emails.filter((e) => e === emailInput).length;
    if (!checkNewEmailIfExist) {
      if (emailInput !== "" && regex.test(emailInput)) {
        try {
          const res = await axios.post("/api/v1/student/validate", {
            email,
          });
          if (res.status === 200) {
            message.success("The student email is a valid email!");
            setEmail([emailInput, ...emails]);
            setIsOk(true);
            setEmailInput("");
          }
        } catch (error: any) {
          if (error.response.status === 404) {
            message.error("The student email you entered does not exist!");
            setIsOk(false);
          }
        }
      } else {
        message.error("Child email required or not an email ");
      }
    } else {
      message.error("you are already added this email");
    }
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
          onChange={handleEmailInput}
          style={{ height: "100%", width: "89%" }}
          value={emailInput}
        />
        <Button
          type="primary"
          icon={<PlusOutlined style={{ fontSize: "1.2rem" }} />}
          onClick={() => handleEmailChange(emailInput)}
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
