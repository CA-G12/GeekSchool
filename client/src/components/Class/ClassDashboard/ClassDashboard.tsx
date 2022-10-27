import {
  UserOutlined,
  ReconciliationOutlined,
  QuestionCircleOutlined,
  DeliveredProcedureOutlined,
  FileTextOutlined,
  DashboardOutlined,
  MenuOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AsideLink from "../../AsideLink";
import Logo from "../../../assets/Logo.png";
import "./style.css";

const paths = [
  "/class/stats",
  "/class/students",
  "/class/assignments",
  "/class/questions",
  "/class/feedback",
  "/class/recommended",
  "/class/1/grades", // we should change '1' to classId to let the teacher move on with his class
];

const icons = [
  <DashboardOutlined />,
  <UserOutlined />,
  <ReconciliationOutlined />,
  <QuestionCircleOutlined />,
  <DeliveredProcedureOutlined />,
  <FileTextOutlined />,
  <FundProjectionScreenOutlined />,
];

const labels = [
  "لوحة التحكم",
  "الطلاب",
  "المهمات",
  "الإسئلة",
  "التقييم",
  "التوصيات",
  "الدرجات",
];

const ClassDashboard: React.FC = () => {
  const { pathname } = window.location;

  const [open, setOpen] = useState<string>("close");
  const [newPath, setNewPath] = useState<string | null>(pathname);
  const [activeColor] = useState<string>("active");

  const openAside = () => {
    if (open === "close") setOpen("open");
    else setOpen("close");
  };

  const handleClicked = (path: string): void => {
    setNewPath(path);
  };

  return (
    <main>
      <header>
        <div>
          <MenuOutlined onClick={openAside} />
          <img src={Logo} alt="geek school logo" />
        </div>
        <div>
          <img
            src="https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png"
            alt="person"
          />
        </div>
      </header>
      <main id="main-layout">
        <aside>
          {paths.map((path, i) => (
            <AsideLink
              icon={icons[i]}
              text={open === "open" ? labels[i] : ""}
              path={path}
              handleClicked={handleClicked}
              activeColor={activeColor}
              newPath={newPath}
              key={Math.random() * 2}
            />
          ))}
        </aside>
        <main>
          <Outlet />
        </main>
      </main>
    </main>
  );
};

export default ClassDashboard;
