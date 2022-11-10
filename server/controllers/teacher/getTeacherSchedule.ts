import { Response, NextFunction } from 'express';
import { getTeacherScheduleQuery, getUserIdFromTableQuery } from '../../queries';

const getTeacherSchedule = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const teacherId = await getUserIdFromTableQuery(role, id);

    const data = await getTeacherScheduleQuery(Number(teacherId?.getDataValue('id')));
    res.json({ data, msg: 'successfully' });
  } catch (error) {
    next(error);
  }
};

export default getTeacherSchedule;
