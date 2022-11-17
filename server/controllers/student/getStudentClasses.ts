import { Response, NextFunction } from 'express';
import { getStudentClassesQuery } from '../../queries';

const getStudentClasses = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;

    const studentClasses = await getStudentClassesQuery(Number(studentId) || 0);

    res.json({ msg: 'The student classes have been returned successfully!', data: studentClasses });
  } catch (error) {
    next(error);
  }
};

export default getStudentClasses;
