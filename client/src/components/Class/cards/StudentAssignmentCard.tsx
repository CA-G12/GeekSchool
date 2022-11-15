import { FC } from "react";
import { Button } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { StudentAssignmentCardProps } from "../../../interfaces";
import "./AssignmentCards.css";

const StudentAssignmentCard: FC<StudentAssignmentCardProps> = ({
  title,
  createdAt,
  description,
}: StudentAssignmentCardProps) => (
  <div className="assignment-card" style={{gap: '2rem'}}>
      <div className="assignment-top">
        <div className="assignment-title">
          <div>
            <FileTextOutlined />
          </div>
          <h1>{title}</h1>
        </div>
        <p>تاريخ النشر: {createdAt}</p>
      </div>
      <div className="card-content">
        <div className="left">
          <p className="assignment-content">{description}</p>
        </div>

        <div
          className="right"
        >
          <Button style={{ borderRadius: "5px" }} type="primary">
            Turned on
          </Button>
        </div>
      </div>
  </div>
);

export default StudentAssignmentCard;
