import { Request, Response, NextFunction } from 'express';
import { studentGradesQuery } from '../../queries';

const getStudentGrade = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const data:any = await studentGradesQuery(Number(studentId));
    res.json({ msg: 'students grades', data });
  } catch (error) {
    next(error);
  }
};

export default getStudentGrade;
