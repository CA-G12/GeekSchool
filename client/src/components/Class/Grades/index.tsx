import { useState, useEffect } from "react";
import { Table, Space, Spin, notification } from "antd";
import axios from "axios";
import NameCell from "./NameCell";
import Resultcell from "./ResultCell";
import handleData from "./handleData";
import "./style.css";

interface StudentInterface {
  id: number;
  name: string;
  img: string;
  degrees: object;
}



type Col =  {title: string, dataIndex:string, width?:string }

const Grades = () => {
  const [students, setStudents] = useState<StudentInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [col, setCol] = useState<Col[]>([]);


  const fetchData = async () => {
    try {
      setLoading(true);

      const {data: { data }} = await axios(`/api/v1/class/1/grades`);
      const {cols, users } = handleData(data);
      setCol([{title: "name", dataIndex: "name", width: '25%'}, ...cols, {title: "total", dataIndex: "total"}]);
      setStudents(users)
      setLoading(false);

    } catch (err) {

      setLoading(false);
      setError("Something went wrong");

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dataSource = students.map((s) => ({
    ...s,
      name: <NameCell name={s.name} image={s.img} />,
      total: <Resultcell sum={Object.values(s.degrees).reduce((cum, current) => cum + current, 0)} /> 
    }));
  
  if (loading) {
    return (
      <Space size="large">
        <Spin size="large" />
      </Space>
    );
  }

  if (error) {
    notification.config({
      placement: "bottomLeft",
      bottom: 10,
      duration: 3,
      rtl: true,
    });
    notification.error({
      message: error,
    });
  }

  return (  
  <>
    <h1 className="title">Grades</h1>
    <div className="table_wrapper">
      <Table
        columns={col}
        dataSource={dataSource}
        size="middle"
        pagination={{ pageSize: 4 }}
      />
    </div>
  </>
  )
};

export default Grades;
