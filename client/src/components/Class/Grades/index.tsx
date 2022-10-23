import React, { ReactNode, FC } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import NameCell from "./NameCell";
import ResultCell from "./ResultCell";

import "./style.css";

const testImage =
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80";

interface DataType {
  name: ReactNode;
  activity: number;
  firstMonth: number;
  midTirm: number;
  secondTirm: number;
  finalTirm: number;
  result: ReactNode;
  id: React.Key;
}

type Props = {};

// columns name
const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Activity",
    dataIndex: "activity",
  },
  {
    title: "First-Month",
    dataIndex: "firstMonth",
  },
  {
    title: "Mid-Tirm",
    dataIndex: "midTirm",
  },
  {
    title: "Second-Tirm",
    dataIndex: "secondTirm",
  },
  {
    title: "Final-tirm",
    dataIndex: "finalTirm",
  },
  {
    title: "Result",
    dataIndex: "result",
  },
];

// fake data => should replace it with actual data
const data: DataType[] = [
  {
    id: "1",
    name: <NameCell name="test" image={testImage} />,
    activity: 5,
    firstMonth: 9,
    midTirm: 16,
    secondTirm: 7,
    finalTirm: 13,
    result: (
      <ResultCell
        activity={5}
        firstMonth={9}
        midTirm={16}
        secondTirm={7}
        finalTirm={13}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 9,
    firstMonth: 9,
    midTirm: 18,
    secondTirm: 7,
    finalTirm: 48,
    result: (
      <ResultCell
        activity={9}
        firstMonth={9}
        midTirm={18}
        secondTirm={7}
        finalTirm={48}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 9,
    firstMonth: 9,
    midTirm: 18,
    secondTirm: 7,
    finalTirm: 48,
    result: (
      <ResultCell
        activity={9}
        firstMonth={9}
        midTirm={18}
        secondTirm={7}
        finalTirm={48}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 9,
    firstMonth: 9,
    midTirm: 18,
    secondTirm: 7,
    finalTirm: 48,
    result: (
      <ResultCell
        activity={9}
        firstMonth={9}
        midTirm={18}
        secondTirm={7}
        finalTirm={48}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 9,
    firstMonth: 9,
    midTirm: 18,
    secondTirm: 7,
    finalTirm: 48,
    result: (
      <ResultCell
        activity={9}
        firstMonth={9}
        midTirm={18}
        secondTirm={7}
        finalTirm={48}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 9,
    firstMonth: 9,
    midTirm: 18,
    secondTirm: 7,
    finalTirm: 48,
    result: (
      <ResultCell
        activity={9}
        firstMonth={9}
        midTirm={18}
        secondTirm={7}
        finalTirm={48}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 9,
    firstMonth: 9,
    midTirm: 18,
    secondTirm: 7,
    finalTirm: 48,
    result: (
      <ResultCell
        activity={9}
        firstMonth={9}
        midTirm={18}
        secondTirm={7}
        finalTirm={48}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 9,
    firstMonth: 9,
    midTirm: 18,
    secondTirm: 7,
    finalTirm: 48,
    result: (
      <ResultCell
        activity={9}
        firstMonth={9}
        midTirm={18}
        secondTirm={7}
        finalTirm={48}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 4,
    firstMonth: 5,
    midTirm: 3,
    secondTirm: 7,
    finalTirm: 20,
    result: (
      <ResultCell
        activity={4}
        firstMonth={5}
        midTirm={3}
        secondTirm={7}
        finalTirm={20}
      />
    ),
  },
  {
    id: "2",
    name: <NameCell name="test1" image={testImage} />,
    activity: 0,
    firstMonth: 9,
    midTirm: 8,
    secondTirm: 7,
    finalTirm: 30,
    result: (
      <ResultCell
        activity={0}
        firstMonth={9}
        midTirm={8}
        secondTirm={7}
        finalTirm={30}
      />
    ),
  },
];

const Grades: FC<Props> = () => (
  <>
    <h1 className="title">Grades</h1>
    <div className="table_wrapper">
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={{ pageSize: 4 }}
      />
    </div>
  </>
);

export default Grades;
