import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../../components/profile/UserHeader";
import Reports from "../../components/profile/Report";
import Nav from "../../components/profile/Nav";
import { userDetailsInterface } from "../../interfaces";
import Logo from "../../assets/Logo.png";
import "./style.css";

const userDetailsInit = {
  name: "باسل الشيخ",
  location: "فلسطين غزة",
  mobile: "+972595238737",
  email: "basil@gmail.com",
  role: "ولي امر",
  image: null,
};

const ProfilePage = () => {
  const { pathname } = window.location;
  const [data] = useState<userDetailsInterface>(userDetailsInit);
  const [newPath, setNewPath] = useState<string | null>(pathname);
  const [activeColor] = useState<string>("profile-active");

  const paths = ["/profile", "/grades", "/tests", "/health"];
  const labels = ["الصفوف", "الدرجات", "الاختبارات", "الصحة"];

  const handleClicked = (path: string): void => {
    setNewPath(path);
  };

  return (
    <main id="profile-page">
      <header>
        <div>
          <img src={Logo} alt="geek school logo" />
        </div>
        <div>
          <img
            src="https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png"
            alt="person"
          />
        </div>
      </header>
      <aside id="profile-aside">
        <Reports studentId={1} />
      </aside>
      <main id="profile-main">
        <UserHeader
          name={data.name}
          location={data.location}
          mobile={data.mobile}
          email={data.email}
          role={data.role}
          image={data.image}
        />
        <nav id="profile-nav">
          {labels.map((pathName, i) => (
            <Nav
              path={paths[i]}
              name={pathName}
              activeColor={activeColor}
              handleClicked={handleClicked}
              newPath={newPath}
            />
          ))}
        </nav>
        <Outlet />
      </main>
    </main>
  );
};

export default ProfilePage;
