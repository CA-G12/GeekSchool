import React from 'react';
import { Button, Form, Input, DatePicker, ConfigProvider } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './AddTest.css';

ConfigProvider.config({
  theme: {
    primaryColor: "#0CBE8A",
  },
});

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AddTest: React.FC = () => {
  const onFinish = (fieldValues: any) => {
    const values = {
      ...fieldValues,
      'date-picker': fieldValues['date-picker'].format('YYYY-MM-DD'),
    };

    console.log('Received values from: ', values);
  };

  return (
    <section className='add-test-cont'>
      <Form
        wrapperCol={layout.wrapperCol}
        labelCol={layout.labelCol}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="add-test-form"
      >
        <CloseSquareOutlined className='close-icon' />
        <Form.Item
          name={['user', 'name']}
          label="Exam title: " rules={[{ required: true }]}
          className="form-item"
        >
          <Input className='input' />
        </Form.Item>
        <Form.Item
          name="exam-date"
          label="Exam date: "
          rules={config.rules}
          className="form-item"
        >
        <DatePicker className='input date-picker' showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
        <Form.Item
          name={['user', 'introduction']}
          label="Extra notes: "
          className='form-item'
        >
          <Input.TextArea className='textarea' />
        </Form.Item>
        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          style={{
            width: '52%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="primary" htmlType="submit" style={{
            width: '196px',
            height: '66px',
            backgroundColor: '#0CBE8A',
            border: '1px solid #0CBE8A',
            borderRadius: '8px',
            fontSize: 'x-large',
            fontWeight: 'bold',
            boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
          }}>
            Add exam
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AddTest;