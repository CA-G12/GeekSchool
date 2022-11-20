import React, { useState } from "react";
import { Form, Button, message, Modal, Select } from "antd";
import axios from "axios";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import "./style.css";

interface studentsInterface {
  id: number;
  name: string;
}

const AddClass: React.FC<{
  setLoading: Function;
  fetchData: Function;
  fetchStudents: Function;
  otherStudents: studentsInterface[];
}> = ({ setLoading, fetchStudents, fetchData, otherStudents }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const source = axios.CancelToken.source();
  const { classId } = useParams();

  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = async (fieldValues: any) => {
    try {
      setLoading(true);
      const newStudents = await axios.post(
        `/api/v1/class/${classId}/addStudents`,
        { ...fieldValues },
        { cancelToken: source.token }
      );
      message.success(` ${newStudents.data.msg} `);
      await fetchData();
      await fetchStudents();
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
        <PlusOutlined /> أضف طلاب
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
          <Form.Item label="حدد طلاب" style={{ width: "90%" }} name="students">
            <Select mode="multiple" placeholder="حدد طلاب لإضافتهم">
              {otherStudents.map((student) => (
                <Select.Option value={student.id}>{student.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            className="button"
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
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
