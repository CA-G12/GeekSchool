import { Request, Response, NextFunction } from 'express';
import { teacherInfoQuery } from '../../queries';

const teacherInfo = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { teacherId } = req.params;
    const data:any = await teacherInfoQuery(Number(teacherId));
    res.json({ msg: 'Teacher info', data });
  } catch (error) {
    next(error);
  }
};

export default teacherInfo;
