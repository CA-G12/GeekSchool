/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { HealthCard } from "../../components";
import { useUserData } from "../../context/AuthContext";
import {
  cancer,
  dental,
  bloodPressure,
  diabetes,
  chronic,
  vision,
  other,
} from "../../assets";
import "./style.css";

const types = [
  "dental",
  "vision",
  "blood_pressure",
  "cancer",
  "diabetes",
  "chronic",
  "other",
];
const names = [
  "صحة الاسنان",
  "صحة النظر",
  "ضغط الدم",
  "السرطان",
  "السكري",
  "الامراض المزمنة",
  "امراض اخرى",
];
const images = [
  dental,
  vision,
  bloodPressure,
  cancer,
  diabetes,
  chronic,
  other,
];
const colors = [
  ["#BE7474", "#7D4B4B"],
  ["#74B5BE", "#56848A"],
  ["#74BE80", "#4C7E54"],
  ["#74BEB1", "#579086"],
  ["#7489BE", "#596995"],
  ["#B874BE", "#6C4570"],
  ["#BE7474", "#7D4B4B"],
];

interface HealthDataInterface {
  id: number;
  dental: string;
  vision: string;
  blood_pressure: string | null;
  cancer: string;
  diabetes: string;
  chronic: string;
  other: string | null;
  createdAt: string;
  updatedAt: string;
  student_id: number;
  [key: string]: string | number | null;
}

const init: HealthDataInterface = {
  id: 0,
  dental: "",
  vision: "",
  blood_pressure: null,
  cancer: "",
  diabetes: "",
  chronic: "",
  other: null,
  createdAt: "2022-11-09T20:21:54.838Z",
  updatedAt: "2022-11-09T20:21:54.838Z",
  student_id: 0,
};

const HealthProfilePage = () => {
  const { studentId } = useParams();
  const [healthData, setHealthData] = useState<HealthDataInterface>(init);
  const [loading, setLoading] = useState<boolean>(true);
  const role: string | undefined = useUserData()?.userData?.role;
  const handleUpdateHealth = async (healthValue: string, type: string) => {
    try {
      if (healthValue === "") throw new Error("صندوق الكتابة فارغ");
      setHealthData({ ...healthData, [type]: healthValue });
      const body = { ...healthData, [type]: healthValue };
      const data = await axios.put(`/api/v1/student/${studentId}/health`, body);
      message.success(data.data.msg);
    } catch (error: any) {
      if (error.name === "Error") message.error(error.message);
      else message.error(error.response.data.msg);
    }
  };

  const getHealthData = async () => {
    try {
      const data = await axios.get(`/api/v1/student/${studentId}/health`);
      if (data.data.data[0]) {
        setHealthData(data.data.data[0]);
        setLoading(false);
      }
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    getHealthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <main>
      <section id="health-container">
        {types.map((type, i) => {
          const key = healthData[type];
          return (
            <HealthCard
              key={`${i + 1}health card`}
              type={type}
              name={names[i]}
              description={key}
              image={images[i]}
              color={colors[i]}
              handleUpdateHealth={handleUpdateHealth}
              role={role}
            />
          );
        })}
      </section>
    </main>
  );
};

export default HealthProfilePage;
