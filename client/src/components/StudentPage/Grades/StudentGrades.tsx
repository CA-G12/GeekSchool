import React, { useState, useEffect } from "react";
import axios from "axios";
import GradeCollapse from "./GradesCollapse/GradesCollapse";

import GradesTable from "./GradesTable/GradesTable";
import "./StudentGrades.css";

const StudentGrades: React.FC = () => {
  const [data, setData] = useState<Array<object>>([]);
  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get("/api/v1/student/grades");

      setData(fetchedData.data.data);
    };

    fetchData();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="grades">
      {data.map((oneClass: any) => (
        <GradeCollapse title={oneClass.Class.name} id={oneClass.Class.id}>
          <br />
          <GradesTable
            assignments={oneClass.Class.Assignments}
            tests={oneClass.Class.Tests}
          />
        </GradeCollapse>
      ))}
    </section>
  );
};

export default StudentGrades;
