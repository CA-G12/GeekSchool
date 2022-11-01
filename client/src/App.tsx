import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import Question from "./components/Class/Questions";
import Assignments from "./components/Class/Assignments/Assignments";
import { SignUpPage, LoginPage, RecommendedPage } from "./pages";
import { UserAuthProvider } from "./context/AuthContext";
// import ClassTest from "./components/ClassTests/ClassTests";
import Announcements from "./components/Class/Announcements/Announcements";
import Feedback from "./components/Class/Feedback/Feedback";
import StatsDummy from "./components/StatsDummy/Dummy";
import StudentsProfile from "./components/Class/StudentsPage";
import Class from "./components/Class";
import Grades from "./components/Class/Grades";
import "antd/dist/antd.variable.min.css";
import "./style.css";
import TeacherSchedule from "./components/TeacherSchedule";

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
        element: <Assignments />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "questions",
        element: <Question />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "recommended",
        element: <RecommendedPage />,
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

const App: React.FC = () => (
  <UserAuthProvider>
    <div className="App">
      <RouterProvider router={router} />
      <TeacherSchedule />
    </div>
  </UserAuthProvider>
);

export default App;
