import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./i18n/config.js";
import StatsDummy from "./components/StatsDummy/Dummy";
import { UserAuthProvider } from "./context/AuthContext";
import Class from "./components/Class/Class";
import "antd/dist/antd.variable.min.css";

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
    path: "/class",
    element: <Class />,
    children: [
      {
        path: "/class/stats",
        element: <StatsDummy />,
      },
      {
        path: "/class/students",
        element: <h1>Students</h1>,
      },
      {
        path: "/class/assignments",
        element: <h1>Assignments</h1>,
      },
      {
        path: "/class/questions",
        element: <h1>Questions</h1>,
      },
      {
        path: "/class/feedback",
        element: <h1>Feedback</h1>,
      },
      {
        path: "/class/recommended",
        element: <h1>Recommended</h1>,
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
