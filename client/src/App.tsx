import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import Question from "./components/Class/Questions";

import {
  SignUpPage,
  LoginPage,
  ParentProfile,
  TeacherProfile,
  HealthProfilePage,
  LandingPage,
} from "./pages";
import { ProvideAuth } from "./context/AuthContext";
import Assignments from "./components/Class/Assignments/Assignments";
import StatsDummy from "./components/StatsDummy/Dummy";
import StudentsProfile from "./components/Class/StudentsPage";
import Class from "./components/Class";
import Grades from "./components/Class/Grades";
import "antd/dist/antd.variable.min.css";
import "./style.css";
import StudentProfile from "./pages/studentProfile";

ConfigProvider.config({
  theme: {
    primaryColor: "#0F93CB",
  },
});

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
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
      element: <StudentProfile />,
      children: [
        {
          path: "health",
          element: <HealthProfilePage />,
        },
      ],
    },
    {
      path: "/parent",
      element:  <ParentProfile /> ,
    },
    {
      path: "/teacher",
      element:  <TeacherProfile /> ,
    },
    {
      path: "/class/:classId",
      element: <Class /> ,
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
          element: <Assignments />,
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
        {
          path: "grades",
          element: <h1>grades</h1>,
        },
      ],
    },
  ]);


  return <ProvideAuth>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </ProvideAuth>
};

export default App;
