import { Recommendation } from '../../models';

const recommendedQueries = async (classId: number) => Recommendation
  .findAndCountAll({
    where: { class_id: classId },
  });

export default recommendedQueries;
