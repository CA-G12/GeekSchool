import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import Feedback from "./components/Class/Feedback/Feedback";
import "./i18n/config.js";
import StatsDummy from "./components/StatsDummy/Dummy";
import { UserAuthProvider } from "./context/AuthContext";
import Class from "./components/Class/Class";
import "antd/dist/antd.variable.min.css";
import "./App.css";

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
        path: "stats",
        element: <StatsDummy />,
      },
      {
        path: "students",
        element: <h1>Students</h1>,
      },
      {
        path: "assignments",
        element: <h1>Assignments</h1>,
      },
      {
        path: "questions",
        element: <h1>Questions</h1>,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "recommended",
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
