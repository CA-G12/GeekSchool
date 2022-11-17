import { Request, Response, NextFunction } from 'express';
import { getUserIdFromTableQuery, putStudentHealthQuery } from '../../queries';

const putStudentHealth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const { body } = req;
    const student = await getUserIdFromTableQuery('student', +studentId);
    const data = await putStudentHealthQuery({ studentId: student?.getDataValue('id'), body });
    res.json({ data: data[1][0], msg: 'Health was updated' });
  } catch (error) {
    next(error);
  }
};

export default putStudentHealth;
