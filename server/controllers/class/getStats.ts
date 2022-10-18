/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { submittedAndNotSubmittedNum } from '../../queries';
import { CustomError } from '../../utils';

const getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    const submitted = await submittedAndNotSubmittedNum(classId, true);
    const notSubmitted = await submittedAndNotSubmittedNum(classId, false);

    res.json({ msg: 'The data is sent successfully!', data: { submitted, notSubmitted } });
  } catch (error) {
    if (error.msg) {
      next(new CustomError(error.status, error.msg));
    }
    next(new CustomError(500, 'Internal server error'));
  }
};

export default getStats;
