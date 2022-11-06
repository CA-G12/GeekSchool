import React from "react";
import { Link } from "react-router-dom";
import { Button, Image, Typography } from "antd";
import Logo from "../../../assets/GeekSchoolLogo.png";
import BcgImage from "../../../assets/landing-bcg.png";
import LandingImage from "../../../assets/landing-image.png";
import { useUserData } from "../../../context/AuthContext";
import "./LandingHeader.css";

const { Title, Text } = Typography;

const LandingHeader: React.FC = () => (
  <main className="landing-section">
    <header className="landing-header">
      <Link to="/" className="logo-image">
        <Image preview={false} width={50} src={Logo} />
      </Link>
      {useUserData().userData?.id !== 0 && (
        <section className="buttons">
          <Link to="/login">
            <Button type="primary">تسجيل دخول</Button>
          </Link>
          <Link to="/signup">
            <Button type="primary">إنشاء حساب</Button>
          </Link>
        </section>
      )}
      <section className="navigation">
        <Link className="nav-link" to="#join">
          انضم إلينا
        </Link>
        <Link className="nav-link" to="#statistics">
          احصائيات
        </Link>
        <Link className="nav-link" to="#opinions">
          آراء
        </Link>
      </section>
    </header>
    <section
      className="join-us-section"
      id="join"
      style={{ backgroundImage: `url(${BcgImage})` }}
    >
      <Image preview={false} className="landing-image" src={LandingImage} />
      <section className="join-us-texts">
        <Title level={2} className="text-title">
          انضم لتكون معنا في الرؤية الجديدة لنظام التعليم..
        </Title>
        <Text type="secondary" className="text-para">
          مكان واحد يجمع المعلم و الطالب و ولي الأمر
        </Text>
      </section>
    </section>
  </main>
);

export default LandingHeader;
