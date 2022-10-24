import React, { ReactNode, FC } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import NameCell from "./NameCell";
import Action from "./Action";

import "./style.css";

const testImage =
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80";

interface DataType {
  name: ReactNode;
  MobileNum: string;
  ParentName: string;
  Action: ReactNode;
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
    title: "Mobile-Num",
    dataIndex: "MobileNum",
  },
  {
    title: "Parent-Name",
    dataIndex: "ParentName",
  },
  {
    title: "Action",
    dataIndex: "Action",
  },
];

// fake data => should replace it with actual data
const data: DataType[] = [
  {
    id: "1",
    name: <NameCell name="test" image={testImage} />,
    MobileNum: "0599999999",
    ParentName: "mahmoud",
    Action: <Action />,
  },
];

const StudentsProfile: FC<Props> = () => (
  <>
    <h1 className="title">Students</h1>
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

export default StudentsProfile;
