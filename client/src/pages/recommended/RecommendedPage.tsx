import { Spin } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecommendedCard } from "../../components";
import AddRecommended from "../../components/AddRecommended";
import { useUserData } from "../../context/AuthContext";
import "./style.css";

type recommendedType = {
  description: string;
  // eslint-disable-next-line camelcase
  material_link: string;
};

const RecommendedPage: React.FC = () => {
  const [recommended, setRecommended] = useState<Array<recommendedType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { userData } = useUserData();
  const source = axios.CancelToken.source();

  const { classId } = useParams();

  useEffect(() => {
    const fetchRecommended = async () => {
      const { data } = await axios.get(`/api/v1/class/${classId}/recommended`);
      setRecommended(data.rows.reverse());
      setLoading(false);
    };
    fetchRecommended();
    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <section className="recommended-section">
      {!loading ?
        <>
          <div>
            <h1>توصيات إضافية</h1>
            {userData.role === "teacher" ? (
              <AddRecommended setLoading={setLoading} />
            ) : (
              ""
            )}
          </div>
          <div className="recommended-container">
            {recommended.map((ele) => (
              <RecommendedCard
                description={ele.description}
                materialLink={ele.material_link}
                key={ele.description+1}
              />
            ))}
          </div>
        </> :
        <div className="loading" style={{
          height: '100%',
          width: '100%',
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Spin size="large" />
        </div>}
    </section>
  );
};
export default RecommendedPage;
