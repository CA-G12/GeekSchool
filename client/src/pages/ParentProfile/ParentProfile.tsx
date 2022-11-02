import { FC, useState, useEffect } from "react";
import axios from "axios";
import ProfilePage from "../profile";
import ProfileCard from "../../components/ProfileCard";
import {
  ParentInfoInterface,
  ChildrenData,
  TeachersData,
} from "../../interfaces";

const ParentProfile: FC = () => {
  const [parentInfo, setParentInfo] = useState<ParentInfoInterface>({
    email: "",
    img: "",
    location: "",
    mobile: "",
    name: "",
    role: "",
  });
  const [children, setChildren] = useState<ChildrenData[]>([
    {
      parent_id: 1,
      name: "",
      user_id: 1,
      img: "",
    },
  ]);
  const [teachers, setTeachers] = useState<TeachersData[]>([
    {
      id: 1,
      email: "",
      img: "",
      location: "",
      mobile: "",
      name: "",
      role: "",
    },
  ]);

  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/v1/parent/info", {
        signal: controller.signal,
      });

      setParentInfo(data.data.data[0].User);
    };

    const fetchChildren = async () => {
      const data = await axios.get(`/api/v1/profile/parent/students`, {
        signal: controller.signal,
      });

      setChildren(data.data.data);
    };

    const fetchTeachers = async () => {
      const data = await axios.get("/api/v1/parent/teachers", {
        signal: controller.signal,
      });

      setTeachers(data.data.data);
    };

    fetchData();
    fetchChildren();
    fetchTeachers();

    return () => controller.abort();
  }, []);

  return (
    <ProfilePage
      name={parentInfo.name}
      email={parentInfo.email}
      role={parentInfo.role}
      image={parentInfo.img}
      location={parentInfo.location}
      mobile={parentInfo.mobile}
    >
      <ProfileCard
        data={children.map((child: ChildrenData) => ({
          id: child.user_id,
          img: child.img,
          name: child.name,
          mobile: parentInfo.mobile,
        }))}
        title="students"
        type="students"
      />
      <ProfileCard
        data={teachers.map((teacher: TeachersData) => ({
          id: teacher.id,
          img: teacher.img,
          name: teacher.name,
          mobile: parentInfo.mobile,
        }))}
        title="teacher"
        type="student"
      />
    </ProfilePage>
  );
};

export default ParentProfile;
