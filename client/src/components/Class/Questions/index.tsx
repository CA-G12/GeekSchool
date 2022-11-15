import { FC, useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import Question from "./Question";
import AnsweredQuestion from "./AnsweredQuestion";
import "./style.css";

type Props = {};
interface questionInterface {
  id: string;
  question: string;
  answer: string;
}

const Questions: FC<Props> = () => {
  const [questions, setQuestions] = useState<questionInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { classId } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios(
        `/api/v1/class/${classId}/questions`
      );
      setQuestions(data.data);
      setLoading(false)
    } catch (error: any) {
      message.error(error.response.data.msg)
    }
  };

  const handleChange = async (id: string, value: string) => {
    // api call to answer question with id and value
    await axios.put(`/api/v1/class/${classId}/questions/${id}`, {
      answer: value,
    });

    setLoading(true)
    setQuestions(
      questions
        .sort((a, b) => (a.answer > b.answer ? 1 : -1))
        .map(
          (item): questionInterface =>
            item.id === id ? { ...item, answer: value } : item
        )
    );
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <section className="questions">
      <h1 className="title">الأسئلة</h1>
      <div className="questions-container">
        {questions.map((q) =>
          q.answer ? (
            <AnsweredQuestion
              key={q.id}
              id={q.id}
              question={q.question}
              answer={q.answer}
              handleChange={handleChange}
            />
            ) : (
              <Question
                key={q.id}
                id={q.id}
                question={q.question}
                answer={q.answer}
                handleChange={handleChange}
              />
            )
          )}
      </div>
    </section>
  );
};

export default Questions;
