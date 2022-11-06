/* eslint-disable jsx-a11y/aria-role */
import React, { useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";
import ProfilePage from "../profile";
import ProfileCard from "../../components/ProfileCard";
import avtar from "../../assets/class_avatar.png";
import './style.css';

interface UserItem {
  id: number;
  email: string;
  name: string;
  img: string;
  location: string;
  mobile: string;
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
}

const TeacherProfile: React.FC = () => {
  const source = axios.CancelToken.source();
  const [students, setStudents] = useState<UserItem[]>([]);
  const [classes, setClasses] = useState<classItem[]>([]);
  const [user, setUser] = useState<UserItem>(initUser);

  useEffect(() => {
    const fetchteacherInfo = async () => {
      try {
        const data = await axios.get("/api/v1/teacher/info", {
          cancelToken: source.token,
        });
        setUser(data.data.data[0]);
      } catch (error: any) {
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
        const data = await axios.get(
          `/api/v1/profile/teacher/${user.id}/classes`,
          {
            cancelToken: source.token,
          }
        );
        setClasses(data.data.data);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    fetchStudents();
    fetchClasses();
    fetchteacherInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfilePage
      name={user.name}
      location={user.location}
      mobile={user.mobile}
      email={user.email}
      role="teacher"
      image={user.img}
    >
      <section id="teacher-tables">
        <ProfileCard
          data={students.map((student: UserItem) => ({
            img: student.img,
            name: student.name,
          }))}
          title="الطلاب"
          type="students"
          _role="teacher"
        />

        <ProfileCard
          data={classes.map((oneClass: classItem) => ({
            img: avtar,
            name: oneClass.name,
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
