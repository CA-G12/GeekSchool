import { Recommendation } from '../../models';

const recommendedQueries = async (classId: Number) => Recommendation
  .findAll({
    attributes: ['id', 'material_link', 'description'],
    where: { class_id: classId },
  });

export default recommendedQueries;
