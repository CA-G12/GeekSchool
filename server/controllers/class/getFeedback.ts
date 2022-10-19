import { Request, Response, NextFunction } from 'express';
import { getClassFeedbackQuery } from '../../queries';
import { CustomError } from '../../utils';

const getFeedback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    const data = await getClassFeedbackQuery(classId);

    res.json({ msg: 'The data is sent successfully!', data });
  } catch (err) {
    next(new CustomError(err.status, err.msg));
  }
};

export default getFeedback;
