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
  const source = axios.CancelToken.source();

  const { classId } = useParams();
  useEffect(() => {
    const fetchRecommended = async () => {
      const { data } = await axios.get(`/api/v1/class/${classId}/recommended`);
      setRecommended(data.rows.reverse());
    };
    fetchRecommended();
    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <section className="recommended-section">
      <div>
        <h1>توصيات إضافية</h1>
        {useUserData().userData?.role === "teacher" ? (
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
          />
        ))}
      </div>
    </section>
  );
};
export default RecommendedPage;
