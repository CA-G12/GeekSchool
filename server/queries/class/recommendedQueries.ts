import { Recommendation } from '../../models';

const recommendedQueries = async (classId: number) => Recommendation
  .findAll({
    where: { class_id: classId },
  });

export default recommendedQueries;
