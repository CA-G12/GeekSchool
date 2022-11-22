import { useState, useEffect } from "react";
import { Table, Spin, notification } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NameCell from "./NameCell";
import Action from "./Action";
import AddStudents from "./addStudent";
import { useUserData } from "../../../context/AuthContext";

import "./style.css";

interface studentsInterface {
  id: number;
  name: string;
}

interface StudentInterface {
  id: number;
  name: string;
  email: string;
  img: string;
  parentName: string;
}

const columns = [
  {
    title: "إسم الطالب",
    dataIndex: "name",
  },
  {
    title: "البريد الالكتروني",
    dataIndex: "email",
  },
  {
    title: "إسم ولي الأمر",
    dataIndex: "parentName",
  },
  {
    title: "عمليات",
    dataIndex: "action",
  },
];

const StudentsProfile = () => {
  const [students, setStudents] = useState<StudentInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [otherStudents, setOtherStudents] = useState<studentsInterface[]>([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { classId } = useParams();
  const { userData } = useUserData();

  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`/api/v1/class/${classId}/students`);
      setStudents(
        data.map((s: any) => ({
          id: s.student_id,
          name: s.name,
          email: s.email,
          img: s.img,
          parentName: s["Student.Parent.User.name"],
        }))
      );
    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
    }
  };

  const fetchStudents = async () => {
    try {
      const studentsdata = await axios.get(
        `/api/v1/class/${classId}/otherStudents/`
      );

      setOtherStudents(studentsdata?.data.data);
      setLoading(false);
      await fetchData();
    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
    }
  };

  const handelDeleteStudent = async (id: number) => {
    await axios.delete(`/api/v1/class/${classId}/student`, {
      data: { studentId: id },
    });
    await fetchData();
    await fetchStudents();
  };

  const handelStudentProfile = async (id: number) => {
    navigate(`/student/${id}`);
  };

  useEffect(() => {
    fetchData();
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const dataSource = students.map((s) => ({
    name: <NameCell name={s.name} image={s.img} />,
    email: s.email,
    parentName: s.parentName,
    action: userData?.role === "teacher" && (
      <Action
        id={s.id}
        handelDeleteStudent={() => handelDeleteStudent(s.id)}
        handelStudentProfile={() => handelStudentProfile(s.id)}
      />
    ),
  }));

  if (error) {
    notification.config({
      placement: "bottomLeft",
      bottom: 10,
      duration: 3,
      rtl: true,
    });
    notification.error({
      message: error,
      // description: error,
    });
  }

  return (
    <section className="students-section">
      {!loading ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 className="title">الطلاب</h1>
            {userData?.role === "teacher" ? (
              <AddStudents
                otherStudents={otherStudents}
                setLoading={setLoading}
                fetchData={fetchData}
                fetchStudents={fetchStudents}
              />
            ) : (
              ""
            )}
          </div>
          <div className="table_wrapper">
            <Table
              columns={columns}
              dataSource={dataSource}
              size="middle"
              pagination={{ pageSize: 4 }}
            />
          </div>
        </>
      ) : (
        <div
          className="loading"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      )}
    </section>
  );
};

export default StudentsProfile;
