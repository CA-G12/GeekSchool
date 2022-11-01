// import type { BadgeProps } from "antd";
// import type { Moment } from "moment";
import React from "react";
import type { BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Moment } from "moment";
import moment from "moment";

// import axios from "axios";

// type testsType = {
//   title: string;
//   id:number;
//   date: Date;
// };

// const fakeData:testsType  = {
//   title: "test",
//   id : 1,
//   date : '17 2022 00:16:25 GMT+0200',
// }

const Calender: React.FC = () => {
  // const source = axios.CancelToken.source();
  // const [tests, setTest] = useState<Array<testsType>>([fakeData]);
  const getListData = (value: Moment) => {
    // const date = moment("2014-02-27T10:00:00").format('DD-MM-YYYY');
    let listData;

    switch (value.date()) {
      case 8:
        listData = [{ type: "success", content: "امتحان علوم" }];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event。。...." },
          { type: "error", content: "This is error event 1." },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value: Moment) => {
    console.log("dddddddddddddddddd", value);

    const d = new Date("2019/06/01");

    // const myMomentObject = moment(d).format("MMMM d, YYYY");
    const today = moment(d);
    console.log(today.date(),'gggggggggggggggggggggggggggggggggg');
    // const myMomentObject = today.format();
    // const myMomentObject = moment("05/27/2022", 'YYYY-MM-DD');
    // console.log("ssssssssssssssssss", myMomentObject.date());
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  console.log("eeeeeee");
  // useEffect(() => {
  //   const fetchTests = async () => {
  //     const { data } = await axios.get(
  //       `/api/v1/student/1/tests`
  //     );
  //     setTest(data);

  //   };
  //   fetchTests();
  //   return () => source.cancel();
  // }, []);

  return (
    <Calendar
      dateCellRender={dateCellRender}
      onSelect={(date) => console.log("selected", date)}
    />
  );
};

export default Calender;
