import { NextFunction, Response } from 'express';
import { getClassQuestionsQuery } from '../../queries';

const getClassQuestions = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const { count, rows } = await getClassQuestionsQuery(classId);

    res.json({ msg: 'success', data: rows, count });
  } catch (error) {
    next(error);
  }
};

export default getClassQuestions;
