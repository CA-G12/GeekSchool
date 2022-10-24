import { Button, Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import "./index.css";
import Swal from "sweetalert2";

const AssignmentModal: React.FC = () => {
  const source = axios.CancelToken.source();
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => setVisible(true);

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (fieldValues: any) => {
    try {
      await axios
        .post(
          "/api/v1/class/25/assignment",
          { ...fieldValues },
          { cancelToken: source.token }
        )
        .then((res) => {
          Swal.fire({
            title: res.data.msg,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        })
        .catch((res) => {
          Swal.fire({
            icon: "error",
            title: res.data.msg,
            text: "Something went wrong!",
          });
        });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: "Something went wrong!",
      });
    }

    handleCancel();
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{ borderRadius: "30px" }}
      >
        <PlusOutlined /> Add
      </Button>
      <Modal
        className="modal"
        footer={null}
        open={visible}
        onCancel={handleCancel}
        width="60%"
        closeIcon={
          <CloseOutlined
            style={{ color: "#0CBE8A", border: "2px solid #0CBE8A" }}
          />
        }
      >
        <Form className="form" onFinish={onFinish} labelCol={{ span: 8 }}>
          <br />

          <Form.Item
            label="Assignment title"
            style={{ width: "70%" }}
            name="title"
            rules={[
              {
                required: true,
                message: "Assignment title is required",
              },
            ]}
          >
            <Input
              className="input"
              placeholder="Assignment title"
              style={{}}
            />
          </Form.Item>

          <Form.Item
            label="Assignment details: "
            style={{ width: "70%" }}
            name="describtion"
            rules={[
              {
                required: true,
                message: "Assignment details is required",
              },
            ]}
          >
            <Input.TextArea
              style={{ borderRadius: "8px", height: "100px" }}
              placeholder="Assignment detail"
            />
          </Form.Item>

          <Form.Item className="button">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AssignmentModal;
