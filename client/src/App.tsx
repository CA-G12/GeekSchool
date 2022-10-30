import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import Question from "./components/Class/Questions";
import { SignUpPage, LoginPage } from "./pages";
import { UserAuthProvider } from "./context/AuthContext";
import ClassTest from "./components/ClassTests/ClassTests";
import StatsDummy from "./components/StatsDummy/Dummy";
import StudentsProfile from "./components/Class/StudentsPage";
import Class from "./components/Class";
import Grades from "./components/Class/Grades";
import "antd/dist/antd.variable.min.css";
// import "./i18n/config.js";
import "./style.css";

import ProfileCard from './components/ProfileCard'

ConfigProvider.config({
  theme: {
    primaryColor: "#0CBE8A",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to="/class">Go to the class page!</Link>,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/student/:studentId",
    element: <h1>student profile</h1>,
  },
  {
    path: "/class/:classId",
    element: <Class />,
    children: [
      {
        path: "stats",
        element: <StatsDummy />,
      },
      {
        path: "students",
        element: <StudentsProfile />,
      },
      {
        path: "assignments",
        element: <ClassTest />, // ? this just temporary, any one works on the assignments can remove it.
      },
      {
        path: "questions",
        element: <Question />,
      },
      {
        path: "feedback",
        element: <h1>Feedback</h1>,
      },
      {
        path: "recommended",
        element: <h1>Recommended</h1>,
      },
      {
        path: "grades",
        element: <Grades />,
      },
    ],
  },
]);

  // required data to run this component 

interface DataType {
  name:string;
  mobile: string;
  img:string;
  id: number;
}

const testData: DataType[] = [
  {
      "name": "Mustafa",
      "mobile": "9528140936",
      "img": "http://dummyimage.com/219x100.png/5fa2dd/ffffff",
      "id": 1,
  },
  {
      "name": "HUMAN RABIES VIRUS IMMUNE GLOBULIN",
      "mobile": "7127917035",
      "img": "http://dummyimage.com/118x100.png/dddddd/000000",
      "id": 2,
  }
];

const App: React.FC = () => (
  <UserAuthProvider>
    <div className="App">
      <RouterProvider router={router} />
      <ProfileCard title="asdasdasd" data={testData} type="" />
    </div>
  </UserAuthProvider>
);

export default App;
