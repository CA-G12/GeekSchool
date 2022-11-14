/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/aria-role */
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
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

const initUser: UserItem = {
  id: 1,
  email: "",
  name: "",
  img: "",
  location: "",
  mobile: "",
};

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
  const [user, setUser] = useState<UserItem>(initUser);
  const [loading, setLoading] = useState(true);
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
        const data = await axios.get("/api/v1/teacher/students", {
          cancelToken: source.token,
        });
        setStudents(data.data.data);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    const fetchClasses = async () => {
      try {
        if (userData.id) {
          const data = await axios.get(
            `/api/v1/profile/teacher/${userData.id}/classes`,
            {
              cancelToken: source.token,
            }
          );
          setClasses(data?.data?.data);
        }
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    fetchTeacherInfo();
    fetchStudents();
    fetchClasses();
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
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
        />
      </section>
    </ProfilePage>
  );
};
export default TeacherProfile;
