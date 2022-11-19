import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import ClassCard from "./ClassCard/ClassCard";
import "./ClassSection.css";

const ClassSection: FC = () => {
  const [classes, setClasses] = useState<Array<object>>([]);
  const { studentId } = useParams();
  const source = axios.CancelToken.source();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await axios.get(`/api/v1/student/${studentId}/classes`);

        setClasses(data.data.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops... Something went wrong!",
          text: `${error}`,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    };

    fetchClasses();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="classes">
      {classes.map((classObject: any, i) => (
        <ClassCard
          id={classObject.id}
          className={classObject.name}
          teacherName={classObject.Teacher.User.name}
          assignments={classObject.Assignments}
          tests={classObject.Tests}
          key={`${i + 1}classes`}
        />
      ))}
    </main>
  );
};

export default ClassSection;
