import { FC, useEffect, useState } from "react";
import type { PaginationProps } from "antd";
import axios from "axios";
import { Pagination } from "antd";
import Question from "./Question";
import AnsweredQuestion from "./AnsweredQuestion";
import "./style.css";

type Props = {};
interface questionInterface {
  id: string;
  question: string;
  answer: string;
}

// const testQuestion: questionInterface[] = [
//   {
//     id: "1",
//     question: "test",
//     answer: "",
//   },
//   {
//     id: "2",
//     question: "test2",
//     answer: "",
//   },
// ];

const Questions: FC<Props> = () => {
  const [questions, setQuestions] = useState<questionInterface[]>([]);
  const [count, setCount] = useState<number>(1);
  const [current, setCurrent] = useState(1);

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

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const fetchData = async () => {
    axios(`/api/v1/class/2/questions/?page=${current}`)
      .then(({ data }) => {
        console.log(data.count);
        setCount(data.count);
        setQuestions(data.data);
      })
      .catch((err) => console.log(err, "err"));
  };

  useEffect(() => {
    // api call to get questions from the back
    fetchData();
    console.log(count);
  }, [current]);
  console.log(questions);
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
      <Pagination
        current={current}
        onChange={onChange}
        total={10 * Math.ceil(count / 2)}
      />
      ;
    </>
  );
};

export default Questions;
