import { Request, Response, NextFunction } from 'express';
import { deleteStudentQuery } from '../../queries/class';
import { CustomError } from '../../utils';

const deleteStudentFromARequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    if (!req.body.studentId) {
      throw new CustomError(400, 'The student id is not given!');
    }

    const { studentId } = req.body;
    const studentDeleted = await deleteStudentQuery(classId, studentId);

    if (!studentDeleted) {
      throw new CustomError(404, 'The student does not exist in this class!');
    }

    res.json({ msg: 'The student deleted successfully!', data: studentDeleted });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new CustomError(400, 'Wrong data is inserted!'));
    } else next(new CustomError(err.status, err.msg));
  }
};

export default deleteStudentFromARequest;
