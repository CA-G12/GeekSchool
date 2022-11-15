import { Question } from '../../models';

const getClassQuestionsQuery = (classId: string) => Question.findAndCountAll(
  {
    raw: true,
    nest: false,
    where: {
      class_id: classId,
    },
  },
);

export default getClassQuestionsQuery;
