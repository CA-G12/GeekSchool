import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./leststyle.css";

interface UserItem {
  email: string;
  'student_id': number;
  'teacher_id': number;
  name: string;
  img: string;
}

const ContainerHeight = 400;

const ClassesList: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);
  const source = axios.CancelToken.source();

  const appendData = async () => {
    try {
      const students = await axios.get(
        "", // route not ready
        { cancelToken: source.token }
      );
      setData(students.data.data);
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  return (
    <List className="list">
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="id"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.student_id}>
            <List.Item.Meta
              style={{ display: "flex" }}
              avatar={<Avatar src={item.img} />}
              title={item.name}
              description={item.email}
            />
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default ClassesList;
