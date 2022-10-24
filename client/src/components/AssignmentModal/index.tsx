import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import "./index.css";

const AssignmentModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => setVisible(true);

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={() => showModal()}>
        <PlusOutlined /> Add
      </Button>
      <Modal
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        visible={visible}
        onCancel={handleCancel}
        width="60%"
      >
        <Form>
          <br />

          <Form.Item
            label="Assignment title"
            style={{ width: "80%" }}
            name="title"
            rules={[
              {
                required: true,
                message: "Assignment title is required",
              },
            ]}
          >
            <Input placeholder="Assignment title" width="100%" />
          </Form.Item>

          <Form.Item
            label="Assignment description: "
            style={{ width: "100%" }}
            name="title"
            rules={[
              {
                required: true,
                message: "Assignment details is required",
              },
            ]}
          >
            <Input
              placeholder="Assignment description"
              width="60%"
              height="100%"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 8, offset: 4 }}>
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
