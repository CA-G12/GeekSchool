import { Card } from "antd";
import React from "react";
import "./index.css";
import { UnorderedListOutlined, DeleteFilled } from "@ant-design/icons";

const TeacherAssignmentCard: React.FC = () => (
  <div>
    <Card style={{ margin: "5px" }}>
      <div className="card-title">
        <div className="title-content">
          <div className="icon-title">
            <UnorderedListOutlined />{" "}
          </div>
          <div>
            <h1>Title card</h1>
          </div>
        </div>

        <div className="title-side">
          <p style={{ color: "#7C7C7C" }}>Posted: 1-12-2000</p>
          <DeleteFilled style={{ color: "red" }} />
        </div>
      </div>

      <div className="card-content">
        <div className="left">
          <p className="assignment-content">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker. including versions of
            Lorem Ipsum
          </p>
        </div>

        <div className="right">
          <div className="turnedOn">
            <span>50</span>Turned on
          </div>
          <div className="missing">
            <span>45</span>Missing
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default TeacherAssignmentCard;
