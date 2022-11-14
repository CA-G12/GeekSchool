import { Response, NextFunction } from 'express';
import { postStudentReportsQuery } from '../../queries';

const postStudentReports = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const { description } = req.body;
    await postStudentReportsQuery(description, studentId);
    res.status(201).json({ msg: 'added report successfully' });
  } catch (error) {
    next(error);
  }
};

export default postStudentReports;
