import { Button, Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FileTextOutlined } from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
import "./index.css";

// eslint-disable-next-line no-unused-vars
const AssignmentModal: React.FC<{ setLoading: Function }> = ({
  setLoading,
}) => {
  const [form] = Form.useForm();
  const source = axios.CancelToken.source();
  const [visible, setVisible] = useState<boolean>(false);
  const { classId } = useParams();

  const showModal = () => setVisible(true);

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (fieldValues: any) => {
    try {
      await axios.post(
        `/api/v1/class/${classId}/assignment`,
        { ...fieldValues },
        { cancelToken: source.token }
      );

      await Swal.fire({
        title: "تم إضافة المهمة بنجاح",
        icon: "success",
      });
      setLoading(true);
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: error.response.statusText,
      });
    }
    handleCancel();
    form.resetFields();
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{
          width: "100%",
          backgroundColor: "#1111",
          borderRadius: "5rem",
          color: "#000",
          boxShadow: "none",
          border: "none",
        }}
      >
        إظافة تكليف جديد
        <FileTextOutlined />
      </Button>
      <Modal
        className="modal"
        footer={null}
        open={visible}
        onCancel={handleCancel}
        width="60%"
      >
        <Form
          form={form}
          className="form"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
        >
          <Form.Item
            label="عنوان المهمة"
            style={{ width: "70%" }}
            name="title"
            rules={[
              {
                required: true,
                message: "عنوان المهمة مطلوب",
              },
            ]}
          >
            <Input className="input" placeholder="عنوان المهمة" style={{}} />
          </Form.Item>

          <Form.Item
            label="تفاصيل المهمة"
            style={{ width: "70%" }}
            name="description"
            rules={[
              {
                required: true,
                message: "تفاصيل المهمة مطلوبة",
              },
            ]}
          >
            <Input.TextArea
              style={{ borderRadius: "8px", height: "100px" }}
              placeholder="تفاصيل المهمة"
            />
          </Form.Item>

          <Form.Item className="button">
            <Button type="primary" htmlType="submit">
              أضف المهمة
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AssignmentModal;
