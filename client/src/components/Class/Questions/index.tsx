import { FC, useEffect, useState } from "react";
import Question from "./Question";
import AnsweredQuestion from "./AnsweredQuestion";
import "./style.css";

type Props = {};
interface questionInterface {
  id: string;
  question: string;
  answer: string;
}

const testQuestion: questionInterface[] = [
  {
    id: "1",
    question: "test",
    answer: "",
  },
  {
    id: "2",
    question: "test2",
    answer: "",
  },
  {
    id: "3",
    question: "test3",
    answer: "answer1",
  },
];

const Questions: FC<Props> = () => {
  const [questions, setQuestions] = useState<questionInterface[]>([]);

  const handleChange = (id: string, value: string): void => {
    // api call to answer question with id and value

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
    // api call to ge questions from the back
    setQuestions(testQuestion);
  }, []);

  return (
    <>
      <h1 className="title">Questions</h1>
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
    </>
  );
};

export default Questions;
