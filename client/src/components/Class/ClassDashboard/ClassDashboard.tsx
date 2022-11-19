import {
  UserOutlined,
  ReconciliationOutlined,
  QuestionCircleOutlined,
  DeliveredProcedureOutlined,
  FileTextOutlined,
  DashboardOutlined,
  MenuOutlined,
  FundProjectionScreenOutlined,
  LogoutOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { message, Popover } from "antd";
import React, { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import AsideLink from "../../AsideLink";
import Logo from "../../../assets/new-logo.png";
import { useUserData } from "../../../context/AuthContext/index";
import "./style.css";

const icons = [
  <DashboardOutlined title="الاحصائيات" />,
  <UserOutlined title="الطلاب" />,
  <ReconciliationOutlined title="المهمات" />,
  <QuestionCircleOutlined title="الأسئلة" />,
  <DeliveredProcedureOutlined title="التقييم" />,
  <FileTextOutlined title="التوصيات" />,
  <FundProjectionScreenOutlined title="الدرجات" />,
  <WechatOutlined title="المحادثة" />,
];

const labels = [
  "الإحصائيات",
  "الطلاب",
  "المهمات",
  "الإسئلة",
  "التقييم",
  "التوصيات",
  "الدرجات",
  "المحادثة",
];

const ClassDashboard: React.FC = () => {
  const { pathname } = window.location;
  const navigate = useNavigate();
  const [open, setOpen] = useState<string>("close");
  const [newPath, setNewPath] = useState<string | null>(pathname);
  const [activeColor] = useState<string>("active");
  const { logout, userData } = useUserData();
  const { classId } = useParams();

  const paths = [
    `/class/${classId}/stats`,
    `/class/${classId}/students`,
    `/class/${classId}/assignments`,
    `/class/${classId}/questions`,
    `/class/${classId}/feedback`,
    `/class/${classId}/recommended`,
    `/class/${classId}/grades`,
    `/class/${classId}/chats`,
  ];

  const openAside = () => {
    if (open === "close") setOpen("open");
    else setOpen("close");
  };

  const handleClicked = (path: string): void => {
    setNewPath(path);
  };

  const logOut = async () => {
    try {
      const { error } = await logout();
      if (!userData) {
        navigate("/");
      } else {
        message.error(error);
      }
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  return (
    <main id="class">
      <header>
        <div>
          <MenuOutlined onClick={openAside} />
          <Link to="/">
            <img src={Logo} alt="geek school logo" />
          </Link>
        </div>
        <div className="logout-image">
          <Popover
            placement="bottom"
            content={
              <div
                className="dropDown"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.5rem 0",
                }}
              >
                <Link
                  to={
                    userData?.role === "teacher"
                      ? "/teacher"
                      : userData?.role === "parent"
                      ? "/parent"
                      : `/student/${userData?.id}`
                  }
                >
                  view Profile
                </Link>

                <Link to="/" onClick={logOut}>
                  Logout
                </Link>
              </div>
            }
            trigger="click"
            className="drop"
          >
            <div>
              <img
                src="https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png"
                alt="person"
              />
            </div>
          </Popover>
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
          <Link to="/">
            <LogoutOutlined onClick={logOut} title="تسجيل الخروج" />
            {open === "open" ? "الخروج" : ""}
          </Link>
        </aside>
        <main>
          <Outlet />
        </main>
      </main>
    </main>
  );
};

export default ClassDashboard;
