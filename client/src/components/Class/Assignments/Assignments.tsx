import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Dropdown, Space, Button, Menu, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useUserData } from "../../../context/AuthContext";
// import AddTest from "../../ClassTests/AddTest/AddTest";
import AssignmentModal from "../../AssignmentModal";
import { StudentAssignmentCard, TeacherAssignmentCard } from "../cards";
import "./Assignments.css";

const Assignments: React.FC = () => {
  const [assignments, setAssignments] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const role = useUserData().userData?.role;
  const source = axios.CancelToken.source();
  const { classId } = useParams();
  const { userData } = useUserData();


  const menu = (
    <Menu
      items={[
        {
          key: "1",
          icon: <AssignmentModal setLoading={setLoading} />,
        },
      ]}
    />
  );

  useEffect(() => {
    const fetchAssignmentsData = async () => {
      try {
        const data = await axios.get(`/api/v1/class/${classId}/assignments`);
        if (userData.role === 'student') setAssignments(data.data.data);
        else if (userData.role === 'teacher') setAssignments(data.data.data.rows)
        setLoading(false)
      } catch (error: any) {
        message.error(error.response.data.msg)
      }
    };
    fetchAssignmentsData();
    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <section className="class-assignment">
      <div>
        <h1>التكليفات</h1>
        <div className="assignment-add-search">
          <Dropdown overlay={menu} className="dropdown">
            <Button className="dropdown-button">
              <Space>
                <PlusOutlined className="plus-icon" />
                إظافة مهمة جديدة
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
        {role === "student" && (
          <section className="assignments-box">
            {assignments.map((assignment: any) => (
              <StudentAssignmentCard
                title={assignment.title}
                createdAt={assignment.createdAt}
                description={assignment.description}
              />
            ))}
          </section>
        )}
        {role === "teacher" && (
          <section className="assignment-box">
            {assignments.map((assignment: any) => (
              <TeacherAssignmentCard
                id={assignment.id}
                title={assignment.title}
                createdAt={assignment.createdAt}
                description={assignment.description}
              />
            ))}
          </section>
        )}
      </section>
  );
};

export default Assignments;
