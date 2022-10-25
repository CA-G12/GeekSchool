import axios from "axios";
import { useState, useEffect } from "react";
import { message } from "antd";
import { Area } from '@antv/g2plot';
import { DashboardCard } from '../../components/Class/cards';
import { dashboardNumberInterface } from '../../interfaces';
import './style.css'

const init = {
  studentLength: 0,
  assignmentLength: 0,
  questionsLength: 0,
};

const StatisticsPage: any = ({ classId }: { classId: number | string }) => {
  const [{
    studentLength,
    assignmentLength,
    questionsLength },
    setDashboardNumber,
  ] = useState<dashboardNumberInterface>(init);

  const area = new Area('dashboard-chart', {
    data: [{
      timePeriod: "2006 Q3",
      value: 1
    }],
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    theme: {colors10 :['#30BF78'],}
  });
  area.render();
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section id="dashboard-page">
      <section id="dashboard-cards">
        <DashboardCard length={studentLength} name="Students" color="#FB7D5B" />
        <DashboardCard length={assignmentLength} name="Assignment" color="#FCC43E" />
        <DashboardCard length={questionsLength} name="Questions" color="#111111" />
      </section>
      <section id="dashboard-chart" />
    </section>
  );
};

export default StatisticsPage;
