import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import Question from "./components/Class/Questions";
import { SignUpPage, LoginPage, ProfilePage } from "./pages";
import { UserAuthProvider } from "./context/AuthContext";
import Assignments from "./components/Class/Assignments/Assignments";
import StatsDummy from "./components/StatsDummy/Dummy";
import StudentsProfile from "./components/Class/StudentsPage";
import Class from "./components/Class";
import Grades from "./components/Class/Grades";
import "antd/dist/antd.variable.min.css";
import "./style.css";

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
    path: "/profile",
    element: <ProfilePage />,
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

const App: React.FC = () => (
  <UserAuthProvider>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </UserAuthProvider>
);

export default App;
