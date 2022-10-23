import React, { SetStateAction, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import "./Feedback.css";

// try {
//   const data = await axios
//     .get(`/api/v1/class/${classId}/feedback`);
//   setFeedbacks(data);

// Swal.fire({
//   title: 'The feedback is added successfully!',
//   showClass: {
//     popup: 'animate__animated animate__fadeInDown'
//   },
//   hideClass: {
//     popup: 'animate__animated animate__fadeOutUp'
//   }
// })
// } catch (error) {
// Swal.fire({
//   icon: 'error',
//   title: 'Oops...',
//   text: 'Something went wrong!',
// })
// }
// };

// fetchData();

const Feedback: React.FC = () => {
  const [, setFeedbacks] = useState<
    SetStateAction<object[]> | AxiosResponse<any, any>
  >([]);

  const source = axios.CancelToken.source();
  const classId = 5; // ? This will change depending on which class was opened.

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`/api/v1/class/${classId}/feedback`, {
        headers: {
          Authorization:
            "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8",
        },
      });

      setFeedbacks(data);
    };

    fetchData();

    return () => source.cancel();
  }, [source]);

  const onFinish = async (values: any) => {
    await axios.post(`api/v1/class/${classId}/feedback`, {
      feedback: values.feedback,
    });

    Swal.fire({
      title: "The feedback is added successfully!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong!
      ${errorInfo}`,
    });
  };

  return (
    <main className="class-feedback">
      <h1 className="feedback-title">Feedback</h1>
      <section className="feedback-inner">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="add-feedback-form"
        >
          <Form.Item
            name="feedback"
            rules={[{ required: true, message: "Please type your feedback!" }]}
          >
            <Input className="input-field" placeholder="Share a new Feedback" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="submit-btn">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </section>

      <section className="feedbacks-boxes">
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
        <p className="feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          obcaecati pariatur ullam ipsum laboriosam nemo rerum dicta repudiandae
          sint magni quidem eos porro quibusdam, voluptatibus, reiciendis
          libero, fugit facere necessitatibus.
        </p>
      </section>
    </main>
  );
};

export default Feedback;
