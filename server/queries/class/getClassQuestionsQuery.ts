import { Question } from '../../models';

const getClassQuestionsQuery = (classId: string) => Question.findAll(
  {
    raw: true,
    nest: false,
    where: {
      class_id: classId,
    },
  },
);

export default getClassQuestionsQuery;
