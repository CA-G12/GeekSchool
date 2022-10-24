import axios from "axios";
import { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { message } from "antd";
import { useUserData } from "../context/AuthContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const App = () => <Line options={options} data={data} />;

const init = {
  studentLength: 0,
  assignmentLength: 0,
  questionsLength: 0,
};

interface dashboardNumber {
  studentLength: number | string;
  assignmentLength: number | string;
  questionsLength: number | string;
}

const StatisticsPage: any = ({ classId }: { classId: number | string }) => {
  const [
    { studentLength, assignmentLength, questionsLength },
    setDashboardNumber,
  ] = useState<dashboardNumber>(init);
  const user = useUserData();
  console.log(user);
  const getStatistics = async () => {
    try {
      const statisticsData = await axios.get(
        `/api/v1/class/${classId}/statistics`
      );
      setDashboardNumber({
        studentLength: statisticsData.data.data.studentsNum.studentsCount,
        assignmentLength:
          statisticsData.data.data.assignmentsNum.assignmentsCount,
        questionsLength: statisticsData.data.data.questionsNum.questionsCount,
      });
    } catch (err: any) {
      message.error(err.message);
    }
  };
  useEffect(() => {
    getStatistics();
  }, []);
  return (
    <main>
      <section>
        <h1>Hello alex</h1>
      </section>
      <section>
        <div className="statistics-card">
          <h1>Students</h1>
          <div>
            <h2>{studentLength}</h2>
            <p>Students</p>
          </div>
        </div>
        <div className="statistics-card">
          <h1>Assignments</h1>
          <div>
            <h2>{assignmentLength}</h2>
            <p>Assignments</p>
          </div>
        </div>
        <div className="statistics-card">
          <h1>Questions</h1>
          <div>
            <h2>{questionsLength}</h2>
            <p>Questions</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StatisticsPage;
