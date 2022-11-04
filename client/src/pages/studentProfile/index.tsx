import { message, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfilePage } from "..";

const StudentProfile = () => {
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState<any>(null);

  const getStudentInfo = async () => {
    try {
      const data = await axios.get(`/api/v1/student/${studentId}/info`);
      setStudentData(data.data.data[0]);
    } catch (error: any) {
      message.error(error);
    }
  };

  useEffect(() => {
    getStudentInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!studentData) return  <Spin tip="Loading..." />;
  return (
    <ProfilePage
      name={studentData.name}
      location={studentData.location}
      mobile={studentData.mobile}
      email={studentData.email}
      role={studentData.role}
      image={studentData.img}
    />
  );
};

export default StudentProfile;
