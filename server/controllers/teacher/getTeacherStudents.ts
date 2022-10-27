import { Request, Response, NextFunction } from 'express';
import { getTeacherStudentsQuery } from '../../queries';
import { CustomError } from '../../utils';

const getTeacherStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { teacherId } = req.params;

    const teacherStudents = await getTeacherStudentsQuery(Number(teacherId) || 0);

    if (teacherStudents.length === 0) {
      throw new CustomError(404, 'The teacher you are searching for does not exist');
    }

    res.json({ msg: 'The data is returned successfully', data: teacherStudents });
  } catch (error) {
    next(error);
  }
};

export default getTeacherStudents;
