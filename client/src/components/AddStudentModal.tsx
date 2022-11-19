import React, { useState, useContext } from "react";
import { Form, Button, message, Input, Modal } from "antd";
import axios from "axios";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import "./style.css";
import { UserAuthContext } from "../context/AuthContext";

const AddStudent: React.FC<{ setLoading: Function }> = ({ setLoading }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const source = axios.CancelToken.source();
  const useUserData = useContext(UserAuthContext);

  const showModal = () => setVisible(true);
  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (fieldValues: any) => {
    const email = fieldValues.name;

    try {
      setLoading(true)

      const res = await axios.post(
        "/api/v1/student/validate",
        { email },
        { cancelToken: source.token }
      );
      if (res.status === 200) {
        const parentId = useUserData?.userData?.id;
        const updateParentId = await axios.put(
          "/api/v1/student/addStudent",
          { email, parentId },
          { cancelToken: source.token }
        );

        message.success(updateParentId.data.msg);
      }
      setLoading(false)
    } catch (error: any) {
      if (error.response.status === 404) {
        message.error("The student email you entered does not exist!");
      }
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
            label="إيميل الطالب"
            style={{ width: "90%" }}
            name="name"
            rules={[
              {
                required: true,
                message: "الرجاء ادخال الإيميل",
              },
            ]}
          >
            <Input
              type="email"
              className="input"
              placeholder="email@example.com"
            />
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

export default AddStudent;
