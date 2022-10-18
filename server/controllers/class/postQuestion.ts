import { Request, Response, NextFunction } from 'express';
import { postQuestionQuery } from '../../queries/class';

const postQuestion = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const { question } = req.body;

    await postQuestionQuery(classId, question);
    res.json({ msg: 'added successfully' });
  } catch (error) {
    next(error);
  }
};

export default postQuestion;
