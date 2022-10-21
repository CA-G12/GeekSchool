import { Op } from 'sequelize';
import { Question } from '../../models';

interface answerInterface {
  questionId: string | number,
  classId: string | number,
  answer: string
}

const putAnswerQuestionQuery = ({
  questionId,
  classId,
  answer,
}: answerInterface) => Question.update({ answer }, {
  where: {
    [Op.and]: {
      id: questionId,
      class_id: classId,
    },
  },
});

export default putAnswerQuestionQuery;
