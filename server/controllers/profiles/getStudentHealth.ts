import { Request, Response, NextFunction } from 'express';
import { getStudentHealthsQuery, getUserIdFromTableQuery } from '../../queries';

const getStudentHealth = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const student = await getUserIdFromTableQuery('student', +studentId);
    const data = await getStudentHealthsQuery(student?.getDataValue('id'));
    res.json({ msg: 'getting all health status successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getStudentHealth;
