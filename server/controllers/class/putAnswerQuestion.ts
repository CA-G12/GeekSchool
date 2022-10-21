import { NextFunction, Request, Response } from 'express';
import { putAnswerQuestionQuery } from '../../queries';
import { CustomError } from '../../utils';

const putAnswerQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId, questionId } = req.params;
    const { answer } = req.body;
    const isUpdate = await putAnswerQuestionQuery({ classId, questionId, answer });
    if (!isUpdate[0]) throw new CustomError(400, 'bad request');
    res.send({ msg: 'answer was update' });
  } catch (error) {
    next(error);
  }
};

export default putAnswerQuestion;
