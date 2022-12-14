import { Request, Response, NextFunction } from 'express';
import { getStudentInfoQuery } from '../../queries';

const getStudentInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;

    const data = await getStudentInfoQuery(studentId);

    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export default getStudentInfo;
