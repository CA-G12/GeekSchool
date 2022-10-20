import { NextFunction, Response, Request } from 'express';
import { getClassQuestionsQuery } from '../../queries/class';

const getClassQuestions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const data = await getClassQuestionsQuery(classId);
    res.status(200).json({ msg: 'success', data });
  } catch (error) {
    next(error);
  }
};

export default getClassQuestions;
