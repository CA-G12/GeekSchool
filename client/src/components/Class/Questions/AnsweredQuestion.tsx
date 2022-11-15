import { FC, useState, useEffect } from "react";
import { Input, Button } from "antd";
import "./style.css";
import { useUserData } from "../../../context/AuthContext";

type Props = {
  question: string;
  answer: string;
  id: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (id: string, value: string) => void;
};

const AnsweredQuestion: FC<Props> = ({
  question,
  answer,
  id,
  handleChange,
}) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState('');
  const [data, setData] = useState('');
  const { role } = useUserData().userData;

  useEffect(() => {
    setData(input);
  }, [input])

  return (
    <div className="question_card">
      <p className="question">{question}</p>
      <div className="question-hr" />
      {edit &&  role === 'teacher' ? (
        <div className="question_input">
          <Input
            placeholder="Enter Your Answer"
            value={data}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            type="primary"
            className="answer_btn"
            onClick={() => {
              setEdit(false)
              handleChange(id, input)
            }}
          >
            حفظ
          </Button>
        </div>
      ) : (
        <div className="question_input">
          <p className="answer">{answer}</p>
          {role === 'teacher' &&
            <Button
            type="primary"
            className="edit_btn"
            onClick={() => setEdit(true)}
            >
              تعديل
            </Button>
          }
        </div>
      )}
    </div>
  );
};

export default AnsweredQuestion;
