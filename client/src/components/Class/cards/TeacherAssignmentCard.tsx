import { Card } from "antd";
import React from "react";
import { UnorderedListOutlined, DeleteFilled } from "@ant-design/icons";
import { TeacherAssignmentCardProps } from "../../../interfaces";
import "./AssignmentCards.css";

const TeacherAssignmentCard: React.FC<TeacherAssignmentCardProps> = ({
  title,
  createdAt,
  description,
  submitted,
  notSubmitted,
}) => (
  <div>
    <Card style={{ margin: "5px" }}>
      <div className="card-title">
        <div className="title-content">
          <div className="icon-title">
            <UnorderedListOutlined />{" "}
          </div>
          <div>
            <h1>{title}</h1>
          </div>
        </div>

        <div className="title-side">
          <p style={{ color: "#7C7C7C" }}>Posted: {createdAt}</p>
          <DeleteFilled style={{ color: "red" }} />
        </div>
      </div>

      <div className="card-content">
        <div className="left">
          <p className="assignment-content">{description}</p>
        </div>

        <div className="right">
          <div className="turnedOn">
            <span>{submitted}</span>Turned on
          </div>
          <div className="missing">
            <span>{notSubmitted}</span>Missing
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default TeacherAssignmentCard;
