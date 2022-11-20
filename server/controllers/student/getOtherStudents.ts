import { Response, NextFunction } from 'express';
import { getAllStudentsQuery } from '../../queries';

const getOtherStudents = async (req: any, res: Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const data:any = await getAllStudentsQuery(classId);
    res.json({ msg: 'students', data });
  } catch (error) {
    next(error);
  }
};

export default getOtherStudents;
