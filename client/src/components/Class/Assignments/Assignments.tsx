import React, { useState, useEffect } from "react";
import { Dropdown, Space, Button, Menu, message, MenuProps, Input } from "antd";
import {
  PlusOutlined,
  FileTextOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { StudentAssignmentCard } from "../cards";
import "./Assignments.css";

const { Search } = Input;

const Assignments: React.FC = () => {
  const [assignments, setAssignments] = useState<Array<object>>([]);
  const [, setAddTest] = useState<boolean>(false);
  const [, setAddAssignment] = useState<boolean>(false);

  // const role = 'teacher';
  const classId = 5; // ? This will be passed when the user clicks on some class.
  const source = axios.CancelToken.source();

  // ? The search function.
  const onSearch = (value: string) =>
    setAddAssignment((prevValue: any) =>
      prevValue.filter((object: any) => object.title.contains(value))
    );

  // ? Button events
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    if (e.key === "1") {
      setAddAssignment(true);
    } else {
      setAddTest(true);
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "إضافة تكليف",
          key: "1",
          icon: <FileProtectOutlined />,
        },
        {
          label: "إضافة اختبار",
          key: "2",
          icon: <FileTextOutlined />,
        },
      ]}
    />
  );

  useEffect(() => {
    const fetchAssignmentsData = async () => {
      const data = await axios.get(`/api/v1/class/${classId}/assignments`);

      console.log(data.data.data);
      setAssignments(data.data.data);
    };

    fetchAssignmentsData();

    return () => source.cancel();
  }, []);

  return (
    <main className="class-assignment">
      <h1 className="assignment-title">التكليفات</h1>
      <section className="assignment-add-search">
        <Search
          placeholder="ابحث عن تكليف"
          className="search"
          onSearch={onSearch}
          enterButton
        />
        <Dropdown overlay={menu} className="dropdown">
          <Button className="dropdown-button">
            <Space>
              <PlusOutlined className="plus-icon" />
              إضافة
            </Space>
          </Button>
        </Dropdown>
      </section>
      <section className="assignments-box">
        {assignments.map((assignment: any) => (
          <StudentAssignmentCard
            title={assignment.title}
            createdAt={assignment.createdAt}
            description={assignment.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Assignments;
