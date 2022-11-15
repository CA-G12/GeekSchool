import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Input } from "antd";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import FeedbackCard from "../../FeedbackCard";
import { useUserData } from "../../../context/AuthContext";
import "./Feedback.css";

const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<object[]>([]);
  const source = axios.CancelToken.source();
  const { classId } = useParams();
  const { userData } = useUserData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const feedbackData: AxiosResponse = await axios.get(
        `/api/v1/class/${classId}/feedback`
      );
      setFeedbacks(feedbackData.data.data.rows.reverse());
      setLoading(false);
    };

    fetchData();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const onFinish = async (values: any) => {
    await axios.post(`/api/v1/class/${classId}/feedback`, {
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

    setLoading(true);
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
    <section className="class-feedback">
      <h1>التغذية الراجعة</h1>
      {userData.role === "student" && (
        <Form
          style={{ display: "flex" }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="add-feedback-form"
        >
          <Form.Item
            name="feedback"
            style={{ width: "100%" }}
            rules={[{ required: true, message: "الرجاء التفضل بإدخال نص" }]}
          >
            <Input className="input-field" placeholder="شارك مراجعة جديدة!" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-btn">
              أرسل
            </Button>
          </Form.Item>
        </Form>
      )}

      <section className="feedbacks-boxes">
        {feedbacks.map((feedback: any) => (
          <FeedbackCard feedback={feedback.feedback} />
        ))}
      </section>
    </section>
  );
};

export default Feedback;
