import { FC, useState, ReactNode } from "react";
import UserHeader from "../../components/profile/UserHeader";
import Reports from "../../components/profile/Report";
import Nav from "../../components/profile/Nav";
// import { userDetailsInterface } from "../../interfaces";
import Logo from "../../assets/Logo.png";
import "./style.css";

interface ProfilePageProps {
  name: string;
  location: string;
  mobile: string;
  email: string;
  role: string;
  image: string;
  children: ReactNode;
}

const ProfilePage: FC<ProfilePageProps> = ({
  name,
  location,
  mobile,
  email,
  role,
  image,
  children,
}) => {
  const { pathname } = window.location;
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
          name={name}
          location={location}
          mobile={mobile}
          email={email}
          role={role}
          image={image}
        />
        {role !== "parent" && (
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
        )}
        <main className="main-content">{children}</main>
      </main>
    </main>
  );
};

export default ProfilePage;
