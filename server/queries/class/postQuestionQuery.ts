import { Question } from '../../models';

const postQuestionQuery = async (classId: string, question: string) => {
  await Question.create({
    class_id: classId,
    question,
  });
};

export default postQuestionQuery;
