import { FC } from "react";
import { Input, Button } from "antd";
// import DashboardLayout from "../../components/Layout/DashboardLayout";
import "./style.css";

type Props = {};

const Grades: FC<Props> = () => (
  // <DashboardLayout>
  <>
    <h1 className="title">Questions</h1>
    <div className="question_card">
      <p className="question">
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum?
      </p>
      <div className="question_input">
        <Input placeholder="Enter Your Answer" />
        <Button type="primary" className="answer_btn">
          Answer
        </Button>
      </div>
    </div>
    <div className="question_card">
      <p className="question">
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum?
      </p>
      <div className="question_input">
        <p className="answer">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum?
        </p>

        <Button type="primary" className="edit_btn">
          Edit
        </Button>
      </div>
    </div>
  </>
  // </DashboardLayout>
);

export default Grades;
