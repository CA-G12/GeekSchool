import {
  UserOutlined,
  BarChartOutlined,
  ReconciliationOutlined,
  QuestionCircleOutlined,
  DeliveredProcedureOutlined,
  CarryOutOutlined,
  BellFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import Avatar from "../../../assets/avatar.png";
import Logo from "../../../assets/Logo.png";
import "./ClassDashboard.css";

const { Header, Content, Sider } = Layout;

const styles = {
  navLinks: {
    width: "80%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1rem",
  },
  navIcons: { fontSize: "1.5rem" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3rem",
    backgroundColor: "#fff",
  },
  headerSecondSection: {
    width: "6rem",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: "10rem" },
  bellIcon: { fontSize: "23px", color: "#767672" },
  notificationsDot: {
    width: "0.6rem",
    height: "0.6rem",
    borderRadius: "50%",
    left: "1rem",
    top: "1rem",
    backgroundColor: "#0CBE8A",
  },
  navbar: {
    height: "100%",
    borderRight: 0,
    display: "flex",
    gap: "2rem",
    color: "#B8C5D3",
  },
  layout: { padding: "0 24px 24px" },
  breadcrumb: { margin: "16px 0" },
  layoutContent: {
    padding: 24,
    margin: 0,
    minHeight: 280,
  },
};

const paths = [
  "/class/stats",
  "/class/students",
  "/class/assignments",
  "/class/questions",
  "/class/feedback",
  "/class/recommended",
  "/class/grades",
];

const labels = [
  "Statistics",
  "Students",
  "Assignments",
  "Questions",
  "Feedback",
  "Recommended",
  "Grades",
];

const items2: MenuProps["items"] = [
  BarChartOutlined,
  UserOutlined,
  ReconciliationOutlined,
  QuestionCircleOutlined,
  DeliveredProcedureOutlined,
  CarryOutOutlined,
  CarryOutOutlined,
].map((Icon, index) => {
  const key: string = String(index + 1);

  return {
    key: `sub${key}`,
    icon: (
      <NavLink to={paths[index]} style={styles.navLinks}>
        <Icon style={styles.navIcons} />
        <p style={{ marginBottom: "-5px" }}>{labels[index]}</p>
      </NavLink>
    ),
  };
});

const ClassDashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="class-dashboard">
      <Header className="header" style={styles.header}>
        <img src={Logo} alt="Logo" style={styles.logo} />
        <section
          style={{ ...styles.headerSecondSection, position: "relative" }}
        >
          <BellFilled style={styles.bellIcon} />
          <img src={Avatar} alt="avatar" />
          <div
            className="notification-dot"
            style={{ ...styles.notificationsDot, position: "absolute" }}
          />
        </section>
      </Header>
      <Layout>
        <Sider
          collapsed={collapsed}
          width={200}
          className="site-layout-background"
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            mode="inline"
            style={{ ...styles.navbar, flexDirection: "column" }}
            items={items2}
          />
        </Sider>
        <Layout style={styles.layout}>
          <Breadcrumb style={styles.breadcrumb}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Class</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={styles.layoutContent}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ClassDashboard;
