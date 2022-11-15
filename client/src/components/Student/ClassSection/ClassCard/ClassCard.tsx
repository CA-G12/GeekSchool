import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "antd";
import ClassAvatar from "../../../../assets/class_avatar.png";
// import ClassBcg from "../../../../assets/class_bcg.png";
import { ClassCardProps } from "../../../../interfaces/componentsInterface";
import "./ClassCard.css";

const { Title, Text } = Typography;

const ClassCard: FC<ClassCardProps> = ({
  id,
  className,
  teacherName,
  assignments,
  tests,
}) => (
  <section
    id={String(id)}
    className="class_card"
  >
    <Card
      className="first-part"
      bodyStyle={{
        // width: "100%",
        // height: "8rem",
        // backgroundImage: `url(${ClassBcg})`,
        // backgroundPosition: "right center",
        // backgroundSize: 'contain',
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "flex-end",
        // justifyContent: "center",
        // gap: "0.7rem",
        // paddingLeft: "6rem",
      }}
    >
      <Title level={3} className="class-name">
        {className}
      </Title>
      <Title level={4} className="teacher-name">
        {teacherName}
      </Title>
    </Card>
    <Link to={`/class/${id}`}>
      <img className="class-avatar" src={ClassAvatar} alt="class avatar" />
    </Link>
    <Card className="assignments-tests">
      <Card
        className="assignments"
        bordered={false}
      >
        {assignments.map((assignment) => (
          <Card
            id={String(assignment.id)}
            bordered={false}
            className="assignment-row"
          >
            <Title level={1} className="assignment-title">
              {assignment.title}
            </Title>
            <div className="bottom_section">
            <Text type="secondary" strong className="created-at">
              {assignment.createdAt.split("T")[0]}
            </Text>
            <Text mark className="marked">
              تكليف
            </Text>

            </div>
          </Card>
        ))}
      </Card>
      <Card
        className="tests"
        bordered={false}
      >
        {tests.map((test) => (
          <Card
            id={String(test.id)}
            bordered={false}
            className="test-row"
          >
            <Title level={5} className="test-title">
              {test.title}
            </Title>
            <div className="bottom_section">
            <Text type="secondary" strong className="created-at">
              {test.date.split("T")[0]}
            </Text>
            <Text mark className="marked">
              إختبار
            </Text>
            </div>
          </Card>
        ))}
      </Card>
    </Card>
  </section>
);

export default ClassCard;
