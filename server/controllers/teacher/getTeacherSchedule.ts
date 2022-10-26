import { Request, Response, NextFunction } from 'express';
import { getTeacherScheduleQuery } from '../../queries';

const getTeacherSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { teacherId } = req.params;
    const data = await getTeacherScheduleQuery(teacherId);
    res.json({ data, msg: 'successfully' });
  } catch (error) {
    next(error);
  }
};

export default getTeacherSchedule;
