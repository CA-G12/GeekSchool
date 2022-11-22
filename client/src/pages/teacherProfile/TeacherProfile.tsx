/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/aria-role */
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { message, Spin } from "antd";
import axios from "axios";
import ProfilePage from "../profile";
import ProfileCard from "../../components/ProfileCard";
import avtar from "../../assets/class_avatar.png";
import { useUserData } from "../../context/AuthContext";
import "./style.css";

interface UserItem {
  id: number;
  email: string;
  name: string;
  img: string;
  location: string;
  mobile: string;
}

interface studentsInterface {
  teacher_id: number;
  student_id: number;
  name: string;
  email: string;
  img: string;
}

interface classItem {
  name: string;
  img: string;
  id: number | string;
}

interface ProfileProps {
  setIsGotten: Dispatch<SetStateAction<boolean>>;
}

const TeacherProfile: React.FC<ProfileProps> = ({ setIsGotten }) => {
  const source = axios.CancelToken.source();
  const [students, setStudents] = useState<studentsInterface[]>([]);
  const [classes, setClasses] = useState<classItem[]>([]);
  const [user, setUser] = useState<UserItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { userData } = useUserData();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacherInfo = async () => {
      try {
        const data = await axios.get("/api/v1/teacher/info", {
          cancelToken: source.token,
        });

        setUser(data.data.data[0]);
      } catch (error: any) {
        navigate("/");
        message.error(error.response.data.msg);
      }
    };

    const fetchStudents = async () => {
      try {
        setLoading(true);
        const data = await axios.get("/api/v1/teacher/students", {
          cancelToken: source.token,
        });
        setStudents(data.data.data);
        setLoading(false);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    const fetchClasses = async () => {
      try {
        setLoading(true);
        if (userData.id) {
          const data = await axios.get(
            `/api/v1/profile/teacher/${userData.id}/classes`,
            {
              cancelToken: source.token,
            }
          );
          setClasses(data?.data?.data);
          setLoading(false);
        }
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    fetchTeacherInfo();
    fetchStudents();
    fetchClasses();
    // setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    user ?
    <ProfilePage
      name={user?.name}
      location={user?.location}
      mobile={user?.mobile}
      email={user?.email}
      role="teacher"
      image={user?.img}
      visitRole={userData?.role}
      setIsGotten={setIsGotten}
    >
      <section id="teacher-tables">
        <ProfileCard
          data={students.map((student: studentsInterface) => ({
            img: student.img,
            name: student.name,
            id: student.student_id,
          }))}
          title="الطلاب"
          type="students"
          _role="teacher"
        />
        <ProfileCard
          data={classes.map((oneClass: classItem) => ({
            img: avtar,
            name: oneClass?.name,
            id: oneClass?.id,
          }))}
          title="الفصول الدراسية"
          type="classes"
          _role="teacher"
          setLoading={setLoading}
        />
      </section>
      </ProfilePage> : 
      <div className="loading" style={{
        height: '100vh',
        width: '100%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Spin size="large" />
      </div>
  );
};
export default TeacherProfile;
