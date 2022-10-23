import React, { ElementType, useState } from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import { questionInterface } from "../interfaces";
import "antd/dist/antd.css";
import "./style.css";

const QuestionsCard: ElementType = ({
  id,
  classId,
  question,
  answer,
}: questionInterface) => {
  const [newAnswer, setNewAnswer] = useState<string | null>(null);
  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value !== "" || e.target.value !== null) {
      setNewAnswer(e.target.value);
    }
  };

  const handleAddAnswer = async () => {
    const response = await axios.put(
      `/api/v1/class/${classId}/questions/${id}`,
      newAnswer
    );
    if (response.data.data.msg === "answer was update") {
      message.success("Answer was update");
    }
  };

  return (
    <div className="question-card">
      <p>{question}</p>
      <div className="hr" />
      <div className="question-form">
        <p>{answer}</p>
        {!answer ? (
          <Form.Item
            validateStatus={newAnswer !== "" ? "success" : "error"}
            hasFeedback
          >
            <Input
              placeholder="Enter your answer"
              id="error"
              onChange={handleAnswer}
            />
          </Form.Item>
        ) : (
          <p>{answer}</p>
        )}
        <Button type="primary" onClick={handleAddAnswer}>
          {answer ? "Edit" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default QuestionsCard;
