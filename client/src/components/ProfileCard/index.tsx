import { Avatar, List } from "antd";
import { ElementType } from "react";
import {
  WhatsAppOutlined,
  MailOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
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
}

const ProfileCard: ElementType = ({ data, title, type }: ProfileCardCC) => {
  const subtitle1 = type === "students" ? `لديك  من` : `يمكنك الوصول إلى`;
  const subtitle2 = type === "students" ? `الأبناء` : `من المدرسين`;
  return (
    <div className="profile_card">
      <div className="card_header">
        <h1>{title}</h1>
        <p>
          {subtitle1}
          <span className="teachers_number"> {data.length} </span> {subtitle2}
        </p>
      </div>
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <div>
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.mobile}>
                <List.Item.Meta
                  avatar={<Avatar src={item.img} />}
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.mobile}
                />
                <div className="icons">
                  {type === "students" ? (
                    <>
                      <MailOutlined /> <WhatsAppOutlined />
                    </>
                  ) : (
                    <AppstoreAddOutlined />
                  )}
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

ProfileCard.defaultProps = {
  type: null,
};

export default ProfileCard;

// required data to run this component

// interface DataType {
//   name:string;
//   mobile: string;
//   img:string;
//   id: number;
// }

// const testData: DataType[] = [
//   {
//       "name": "Mustafa",
//       "mobile": "9528140936",
//       "img": "http://dummyimage.com/219x100.png/5fa2dd/ffffff",
//       "id": 1,
//   },
//   {
//       "name": "HUMAN RABIES VIRUS IMMUNE GLOBULIN",
//       "mobile": "7127917035",
//       "img": "http://dummyimage.com/118x100.png/dddddd/000000",
//       "id": 2,
//   }
// ];
