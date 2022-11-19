import { Avatar, List } from "antd";
import { ElementType } from "react";
import { Link } from "react-router-dom";
import { WhatsAppOutlined } from "@ant-design/icons";
import ReactWhatsapp from "react-whatsapp";
import AddClassModal from "../AddClassModal";
import AddStudentModal from "../AddStudentModal"
import "./style.css";

interface DataType {
  name: string;
  mobile: string;
  img: string;
  id: number;
}

interface ProfileCardCC {
  data: DataType[];
  title: string;
  type?: string;
  _role: string;
  setLoading: Function;
}

const ProfileCard: ElementType = ({
  data,
  title,
  type,
  _role,
  setLoading,
}: ProfileCardCC) => {
  let subtitle1;
  let subtitle2;

  if (_role === "parent") {
    subtitle1 = type === "students" ? `لديك ` : `يمكنك الوصول إلى`;
    subtitle2 = type === "students" ? `من الأبناء` : `من المدرسين`;
  } else {
    subtitle1 = type === "students" ? `لديك ` : `يمكنك الوصول إلى`;
    subtitle2 = type === "students" ? `من الطلاب` : `من الفصول الدراسية`;
  }

  return (
    <div className="profile_card">
      <div className="card_header">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>{
          title === "students"
          ? "الطلاب" 
          : title === "teacher"
          ? "المدرسين"
          : "الفصول الدراسية"
          }</h1>
 
          {
            
          _role === "teacher" && type === "classes" 
          ? ( <AddClassModal setLoading={setLoading} /> )
          : _role === "parent" && type === "students" 
          ? (<AddStudentModal setLoading={setLoading}/>)
          : null
          }
        </div>
        <p>
          {subtitle1}
          <span className="teachers_number"> {data.length} </span> {subtitle2}
        </p>
      </div>
      <div
        id="scrollableDiv"
        style={{
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <div>
          {type === "students" ? (
            <List
              dataSource={data}
              renderItem={(item) => (
                <Link to={`/student/${item.id}/classes`}>
                  <List.Item key={item.mobile} className="inner_content">
                    <List.Item.Meta
                      avatar={<Avatar src={item.img} />}
                      title={item.name}
                    />
                  </List.Item>
                </Link>
              )}
            />
          ) : (
            <List
              dataSource={data}
              renderItem={(item) => (
                <Link to={_role !== "parent" ? `/class/${item.id}/stats` : ""}>
                  <List.Item key={item.mobile} className="inner_content">
                    <List.Item.Meta
                      avatar={<Avatar src={item.img} />}
                      title={item.name}
                    />
                    {_role === "parent" ? (
                      <div className="icons">
                        <ReactWhatsapp
                          style={{ background: "none", border: "none" }}
                          number={item.mobile}
                          message="مرحباً أستاذ."
                          element="button"
                        >
                          <WhatsAppOutlined />
                        </ReactWhatsapp>
                      </div>
                    ) : null}
                  </List.Item>
                </Link>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

ProfileCard.defaultProps = {
  type: null,
};

export default ProfileCard;
