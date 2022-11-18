/* eslint-disable no-unused-vars */
import { FC, useEffect, useState } from "react";
import timeLineData from "./timeLineData";
import "./style.css";

const TimeLineSection: FC = () => {
  const [role, setRole] = useState<string>("student");
  const [data, setData] = useState(timeLineData.student.data);
  const [dataStep, setDataStep] = useState(timeLineData.student.steps);

  const handleData = () => {
    if (role === "student") {
      setData(timeLineData.student.data);
      setDataStep(timeLineData.student.steps);
    } else if (role === "teacher") {
      setData(timeLineData.teacher.data);
      setDataStep(timeLineData.teacher.steps);
    } else if (role === "parent") {
      setData(timeLineData.parent.data);
      setDataStep(timeLineData.parent.steps);
    }
  };

  useEffect(() => {
    handleData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  return (
    <section id="timeline-section">
      <div className="timeline-buttons">
        <button type="button" name="student" className={role === 'student' ? 'timeline-active' : ''} onClick={(e: any) => setRole(e.target.name)}>
          طالب
        </button>
        <button type="button" name="teacher" className={role === 'teacher' ? 'timeline-active' : ''} onClick={(e: any) => setRole(e.target.name)}>
          مدرس
        </button>
        <button type="button" name="parent" className={role === 'parent' ? 'timeline-active' : ''} onClick={(e: any) => setRole(e.target.name)}>
          ولي أمر
        </button>
      </div>
      <div className="timeline-container">
        {data.map((e)=> <div className="timeline-card" >
            <span className="timeline-circle" style={{border: `4px solid ${e.color}`}}/>
            <div style={{borderBottom: `4px solid ${e.color}`}}>
              <p>{e.text}</p>
            </div>
          </div>)
        }
        <div className="timeline-card">
          <span className="timeline-circle" style={{border: `4px solid ${dataStep.color}`}}/>
          <div style={{borderBottom: `4px solid ${dataStep.color}`}}>
            <ul>
              {dataStep.data.map((e) => <li>{e}</li>)}
            </ul>
          </div>
          </div>
      </div>
    </section>
  );
};

export default TimeLineSection;