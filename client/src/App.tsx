import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import Question from "./components/Class/Questions";
import { SignUpPage } from "./pages";
import { UserAuthProvider } from "./context/AuthContext";
import ClassTest from "./components/ClassTests/ClassTests";
import StatsDummy from "./components/StatsDummy/Dummy";
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
    path: "/class",
    element: <Class />,
    children: [
      {
        path: "stats",
        element: <StatsDummy />,
      },
      {
        path: "students",
        element: <h1>Students</h1>,
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
