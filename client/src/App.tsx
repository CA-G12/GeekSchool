import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import Question from "./components/Class/Questions";
import { SignUpPage, LoginPage } from "./pages";
import { UserAuthProvider } from "./context/AuthContext";
import ClassTest from "./components/ClassTests/ClassTests";
import Feedback from "./components/Class/Feedback/Feedback";
import StatsDummy from "./components/StatsDummy/Dummy";
import StudentsProfile from "./components/Class/StudentsPage";
import Class from "./components/Class";
import "antd/dist/antd.variable.min.css";
import "./i18n/config.js";
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
    path: "/student/:studentId",
    element: <h1>student profile</h1>,
  },
  {
    path: "/class",
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
        element: <Feedback />,
      },
      {
        path: "recommended",
        element: <h1>Recommended</h1>,
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
