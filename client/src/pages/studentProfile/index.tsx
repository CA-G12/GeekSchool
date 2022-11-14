import { message } from "antd";
import axios from "axios";
import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfilePage } from "..";
import { useUserData } from "../../context/AuthContext";

interface StudentDataInterface {
  id: number;
  name: string;
  mobile: string;
  email: string;
  img: string;
  location: string;
  role: string;
}

const StudentProfile: FC<{
  setIsGotten: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsGotten }) => {
  const { studentId } = useParams();
  const { userData } = useUserData();
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState<StudentDataInterface>({
    id: 0,
    name: "",
    mobile: "",
    email: "",
    img: "",
    location: "",
    role: "",
  });

  const source = axios.CancelToken.source();
  const navigate = useNavigate();
  const controller = new AbortController();

  const getStudentInfo = async () => {
    try {
      const data = await axios.get(`/api/v1/student/${studentId}/info`,{
        cancelToken: source.token,
        signal: controller.signal,
      });
      setStudentData(data.data.data[0]);
      setLoading(false);
    } catch (error: any) {
      message.error(error);
      navigate('/')
    }
  };

  useEffect(() => {
    getStudentInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => controller.abort();
  }, [loading]);

  // if (!studentData) return <Spin tip="Loading..." />;
  return (
    <ProfilePage
      name={studentData?.name}
      location={studentData?.location}
      mobile={studentData?.mobile}
      email={studentData?.email}
      role={studentData?.role}
      image={studentData?.img}
      visitRole={userData?.role}
      setIsGotten={setIsGotten}
    />
  );
};

export default StudentProfile;
