import {
  UserOutlined,
  BarChartOutlined,
  ReconciliationOutlined,
  QuestionCircleOutlined,
  DeliveredProcedureOutlined,
  CarryOutOutlined,
  BellFilled,
  MenuOutlined,
} from "@ant-design/icons";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import Avatar from "../../../assets/avatar.png";
import Logo from "../../../assets/Logo.png";
import "./ClassDashboard.css";

const { Header, Content, Sider } = Layout;

const styles = {
  navLinks: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navIcons: { fontSize: "1.5rem" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3rem",
    backgroundColor: "#fff",
  },
  headerFirstSection: {
    width: "15rem",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerSecondSection: {
    width: "6rem",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: "27px",
    fontWeight: "bold",
    height: "18px",
    color: "#0CBE8A",
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
];

const items2: MenuProps["items"] = [
  BarChartOutlined,
  UserOutlined,
  ReconciliationOutlined,
  QuestionCircleOutlined,
  DeliveredProcedureOutlined,
  CarryOutOutlined,
].map((Icon, index) => {
  const key: string = String(index + 1);

  return {
    key: `sub${key}`,
    icon: (
      <NavLink to={paths[index]} style={styles.navLinks}>
        <Icon style={styles.navIcons} />
      </NavLink>
    ),
  };
});

const ClassDashboard: React.FC = () => (
  <Layout className="class-dashboard">
    <Header className="header" style={styles.header}>
      <section style={styles.headerFirstSection}>
        <MenuOutlined style={styles.menuIcon} />
        <img src={Logo} alt="Logo" style={styles.logo} />
      </section>
      <section style={{ ...styles.headerSecondSection, position: "relative" }}>
        <BellFilled style={styles.bellIcon} />
        <img src={Avatar} alt="avatar" />
        <div
          className="notification-dot"
          style={{ ...styles.notificationsDot, position: "absolute" }}
        />
      </section>
    </Header>
    <Layout>
      <Sider width={150} className="site-layout-background">
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

export default ClassDashboard;
