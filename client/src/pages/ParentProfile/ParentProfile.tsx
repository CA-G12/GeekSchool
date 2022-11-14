import { FC, useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import ProfilePage from "../profile";
import ProfileCard from "../../components/ProfileCard";
import { useUserData } from "../../context/AuthContext";
import {
  ParentInfoInterface,
  ChildrenData,
  TeachersData,
} from "../../interfaces";

const ParentProfile: FC<{
  setIsGotten: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsGotten }) => {
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

  const { userData } = useUserData();

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
  const [loading, setLoading] = useState(true);
  const source = axios.CancelToken.source();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("/api/v1/parent/info", {
          cancelToken: source.token,
        });

        setParentInfo(data.data.data[0]);
      } catch (error: any) {
        navigate("/");
        message.error(error.response.data.msg);
      }
    };

    const fetchChildren = async () => {
      try {
        const data = await axios.get(`/api/v1/profile/parent/students`, {
          cancelToken: source.token,
        });

        setChildren(data.data.data);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    const fetchTeachers = async () => {
      try {
        const data = await axios.get("/api/v1/parent/teachers", {
          cancelToken: source.token,
        });

        setTeachers(data.data.data);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    fetchData();
    fetchChildren();
    fetchTeachers();

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <ProfilePage
      name={parentInfo.name}
      email={parentInfo.email}
      role={parentInfo.role}
      image={parentInfo.img}
      location={parentInfo.location}
      mobile={parentInfo.mobile}
      visitRole={userData?.role}
      setIsGotten={setIsGotten}
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
        _role="parent"
      />
      <ProfileCard
        data={teachers.map((teacher: TeachersData) => ({
          id: teacher.id,
          img: teacher.img,
          name: teacher.name,
          mobile: parentInfo.mobile,
        }))}
        title="teacher"
        type="teacher"
        _role="parent"
      />
    </ProfilePage>
  );
};

export default ParentProfile;
