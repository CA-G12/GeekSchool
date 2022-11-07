/* eslint-disable react/jsx-no-useless-fragment */
import { FC, ReactNode, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import UserHeader from "../../components/profile/UserHeader";
import Reports from "../../components/profile/Report";
import Nav from "../../components/profile/Nav";
import { TeacherSchedule } from "../../components";
import Logo from "../../assets/new-logo.png";
import "./style.css";

interface ProfilePageProps {
  name: string;
  location: string;
  mobile: string;
  email: string;
  role: string;
  image: string;
  visitRole: string | undefined;
  children?: ReactNode;
}

const ProfilePage: FC<ProfilePageProps> = ({
  name,
  location,
  mobile,
  email,
  role,
  image,
  visitRole,
  children,
}) => {
  const { pathname } = window.location;
  const [newPath, setNewPath] = useState<string | null>(pathname);
  const [activeColor] = useState<string>("profile-active");
  const { studentId } = useParams();

  const paths = [
    `/student/${studentId}/classes`,
    `/student/${studentId}/grades`,
    `/student/${studentId}/tests`,
    `/student/${studentId}/health`,
  ];
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

      {role === "student" && (
        <Reports studentId={studentId} visitRole={visitRole} />
      )}

      <main id="profile-main">
        <UserHeader
          name={name}
          location={location}
          mobile={mobile}
          email={email}
          role={role}
          image={image}
        />
        {role === "student" && (
          <nav id="profile-nav">
            {labels.map((pathName, i) => (
              <Nav
                path={paths[i]}
                name={pathName}
                activeColor={activeColor}
                handleClicked={handleClicked}
                newPath={newPath}
                testPath={paths[i]}
              />
            ))}
          </nav>
        )}
        {role === "teacher" && <TeacherSchedule />}
        {children ? <>{children}</> : <Outlet />}
      </main>
    </main>
  );
};

export default ProfilePage;
