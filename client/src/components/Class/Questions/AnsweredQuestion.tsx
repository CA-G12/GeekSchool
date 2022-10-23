import { FC, useState } from "react";
import { Input, Button } from "antd";
import "./style.css";

type Props = {
  question: string;
  answer: string;
  id: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (id: string, value: string) => void;
};

// const a = " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum?"
const AnsweredQuestion: FC<Props> = ({
  question,
  answer,
  id,
  handleChange,
}) => {
  // const [answer, setAnswer] = useState(a);
  const [edit, setEdit] = useState(false);

  return (
    <div className="question_card">
      <p className="question">{question}</p>
      {edit ? (
        <div className="question_input">
          <Input
            placeholder="Enter Your Answer"
            value={answer}
            onChange={(e) => handleChange(id, e.target.value)}
          />
          <Button
            type="primary"
            className="answer_btn"
            onClick={() => setEdit(false)}
          >
            Save
          </Button>
        </div>
      ) : (
        <div className="question_input">
          <p className="answer">{answer}</p>
          <Button
            type="primary"
            className="edit_btn"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>{" "}
        </div>
      )}
    </div>
  );
};

export default AnsweredQuestion;
