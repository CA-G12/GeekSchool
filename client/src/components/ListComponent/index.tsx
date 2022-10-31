import React from "react";
import ClassesList from "./classesList";
import StudentsList from "./studentList";
import "./leststyle.css";

const TeacherLists: React.FC = () => (
  <div className="teacher-list">
    <div className="list-card">
      <div className="list-title">
        <h1>الطلاب</h1>
        <span>جميع الطلاب المسجلين لديك</span>
      </div>
      <ClassesList />{" "}
    </div>

    <div className="list-card">
      <div className="list-title">
        <h1>الفصول الدراسية</h1>
        <span>جميع الفصول الدراسية</span>
      </div>
      <StudentsList />{" "}
    </div>
  </div>
);

export default TeacherLists;
