import { Recommendation } from '../../models';

const recommendedQueries = async (classId: Number) => Recommendation
  .findAll({
    where: { class_id: classId },
  });

export default recommendedQueries;
