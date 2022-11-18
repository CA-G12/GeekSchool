import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "antd";
import Logo from "../../../assets/new-logo.png";
import BcgImage from "../../../assets/landing-bcg.png";
import LandingImage from "../../../assets/landing-image.png";
import { useUserData } from "../../../context/AuthContext";
import "./LandingHeader.css";

const LandingHeader: React.FC = () => {
  const userId = useUserData().userData?.id;
  const userRole = useUserData().userData?.role;
  const [active, setActive] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <main className="landing-section">
      <header
        className={active ? "landing-header header-active" : "landing-header"}
      >
        <Link to="/" className="logo-image">
          <Image preview={false} src={Logo} />
        </Link>
        <section className="navigation">
          <a className="nav-link" href="#join">
            انضم إلينا
          </a>
          <a className="nav-link" href="#statistics">
            احصائيات
          </a>
          <a className="nav-link" href="#timeline-section">
            الجدول الزمني
          </a>
          <a className="nav-link" href="#opinions">
            آراء
          </a>
        </section>
        {!userId && (
          <section className="buttons">
            <Link to="/login">تسجيل دخول</Link>
            <Link to="/signup">إنشاء حساب</Link>
          </section>
        )}
        {userRole && (
          <Link
            to={
              userRole === "parent"
                ? "/parent"
                : userRole === "student"
                ? `/student/${userId}`
                : "/teacher"
            }
            className="user-profile"
          >
            <Button type="primary">حسابي</Button>
          </Link>
        )}
      </header>
      <section
        className="join-us-section"
        id="join"
        style={{ backgroundImage: `url(${BcgImage})` }}
      >
        <div>
          <img src={LandingImage} alt="person" />
        </div>
        <div>
          <h1>انضم لتكون معنا في الرؤية الجديدة لنظام التعليم..</h1>
          <p>مكان واحد يجمع المعلم و الطالب و ولي الأمر</p>
        </div>
      </section>
    </main>
  );
};

export default LandingHeader;
