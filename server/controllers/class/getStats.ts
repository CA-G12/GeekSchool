import { Request, Response, NextFunction } from 'express';
import { classStats } from '../../queries';
import { CustomError } from '../../utils';

const getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    const stats = await classStats(classId);

    const submitted = stats['0'][0];
    const notSubmitted = stats['1'][0];
    const studentsNum = stats['2'][0];
    const assignmentsNum = stats['3'][0];
    const questionsNum = stats['4'][0];

    res.json({
      msg: 'The data is sent successfully!',
      data: {
        submitted, notSubmitted, studentsNum, assignmentsNum, questionsNum,
      },
    });
  } catch (error) {
    if (error.msg) {
      next(new CustomError(error.status, error.msg));
    }
    next(error);
  }
};

export default getStats;
