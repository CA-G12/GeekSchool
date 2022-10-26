import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import { StatisticsPage, SignUpPage, LoginPage } from "./pages";
import Question from "./components/Class/Questions";
import { UserAuthProvider } from "./context/AuthContext";
import ClassTest from "./components/ClassTests/ClassTests";
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
        element: <StatisticsPage classId={1} />,
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
