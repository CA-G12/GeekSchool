import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Form, Input, DatePicker } from "antd";
import { CloseSquareOutlined } from "@ant-design/icons";
import "./AddTest.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    text: "${label} is not a valid text!",
    date: "${label} is not a valid date!",
  },
};

const AddTest: React.FC = () => {
  const source = axios.CancelToken.source();

  const onFinish = async (fieldValues: any) => {
    const values = {
      testTitle: fieldValues["exam-title"],
      testDate: fieldValues["exam-date"].format("YYYY-MM-DD HH:mm:ss"),
      testNotes: fieldValues["exam-notes"],
    };

    try {
      await axios
        .post(
          "/api/v1/class/test",
          {
            ...values,
          },
          {
            cancelToken: source.token,
          }
        )
        .then(() => {
          Swal.fire({
            title: "The test is added successfully!",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          source.cancel();
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
          source.cancel();
        });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      source.cancel();
    }
  };

  return (
    <section className="add-test-cont">
      <Form
        wrapperCol={layout.wrapperCol}
        labelCol={layout.labelCol}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="add-test-form"
      >
        <CloseSquareOutlined className="close-icon" />
        <Form.Item
          name="exam-title"
          label="Exam title: "
          rules={[{ required: true }]}
          className="form-item"
        >
          <Input className="input" />
        </Form.Item>
        <Form.Item
          name="exam-date"
          label="Exam date: "
          rules={config.rules}
          className="form-item"
        >
          <DatePicker
            className="input date-picker"
            showTime
            format="YYYY-MM-DD HH:mm:ss"
          />
        </Form.Item>
        <Form.Item
          name="exam-notes"
          label="Extra notes: "
          className="form-item"
        >
          <Input.TextArea className="textarea" />
        </Form.Item>
        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          style={{
            width: "52%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "196px",
              height: "66px",
              backgroundColor: "#0CBE8A",
              border: "1px solid #0CBE8A",
              borderRadius: "8px",
              fontSize: "x-large",
              fontWeight: "bold",
              boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
            }}
          >
            Add exam
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AddTest;
