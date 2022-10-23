import { FC } from "react";
import "./style.css";

type Props = {
  activity: number;
  firstMonth: number;
  midTirm: number;
  secondTirm: number;
  finalTirm: number;
};

const ResultCell: FC<Props> = ({
  activity,
  firstMonth,
  midTirm,
  secondTirm,
  finalTirm,
}) => {
  const result = activity + firstMonth + midTirm + secondTirm + finalTirm;
  const className = result < 60 ? "result_failed" : "result_success";
  return (
    <div className={className}>
      <span className="result_text">{result}</span>
    </div>
  );
};
export default ResultCell;
