import { NextFunction, Request, Response } from 'express';
import { getClassStudentsQuery } from '../../queries/class';

const getClassStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const data = await getClassStudentsQuery(classId);
    res.status(200).json({ msg: 'success', data });
  } catch (error) {
    next(error);
  }
};

export default getClassStudents;
