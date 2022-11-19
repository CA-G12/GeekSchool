import React, { useState } from "react";
import { Form, Button, message, Input, Modal } from "antd";
import axios from "axios";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import "./style.css";

const AddClass: React.FC<{ setLoading: Function }> = ({ setLoading }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const source = axios.CancelToken.source();
  const showModal = () => setVisible(true);
  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (fieldValues: any) => {
    try {
      setLoading(true);
      const newClass = await axios.post(
        `/api/v1/class/`,
        { ...fieldValues },
        { cancelToken: source.token }
      );

      message.success(newClass.data.msg);
      setLoading(false);
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
    handleCancel();
    form.resetFields();
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{ borderRadius: "50px" }}
      >
        <PlusOutlined />
      </Button>
      <Modal
        className="modal"
        footer={null}
        open={visible}
        onCancel={handleCancel}
        width="60%"
        closeIcon={
          <CloseOutlined
            style={{ color: "#2AA4D4", border: "2px solid #2AA4D4" }}
          />
        }
      >
        <Form
          style={{
            width: "100%",
            marginTop: "1.2rem",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
          }}
          className="form"
          onFinish={onFinish}
          labelCol={{ span: 5 }}
          form={form}
        >
          <Form.Item
            label="الفصل الدراسي"
            style={{ width: "90%" }}
            name="name"
            rules={[
              {
                required: true,
                message: "اسم الفصل الدراسي مطلوب",
              },
            ]}
          >
            <Input className="input" placeholder="اسم الفصل الدراسي" />
          </Form.Item>

          <Form.Item
            className="button"
            style={{ width: "55%", display: "flex", justifyContent: "start" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#2AA4D4" }}
            >
              أضف
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddClass;
