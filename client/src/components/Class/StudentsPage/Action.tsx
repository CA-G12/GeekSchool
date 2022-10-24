import { FC } from "react";
import "./style.css";
import { UserOutlined, DeleteOutlined}  from "@ant-design/icons";

type Props = {};

const Action: FC<Props> = () => (
    <div className="action">
      <UserOutlined className="user_icon icon"/>
      <DeleteOutlined className="delete_icon icon"/>
    </div>
  );
export default Action;