import { Response, NextFunction } from 'express';
import { studentAssignmentQuery, teacherAssignmentQuery } from '../../queries';
import { CustomError, CustomRequest } from '../../utils';

const studentAssignment = async (req: CustomRequest, res: Response, next:NextFunction) => {
  try {
    const { user } = req;
    const { studentId, classId } = req.params;
    if (user.role === 'student') {
      if (!studentId) next(new CustomError(401, 'Unauthenticated'));
      const data = await studentAssignmentQuery(studentId, classId);
      res.json({ msg: 'Student Assignments  for this class', data });
    } else {
      const data = await teacherAssignmentQuery(classId);
      res.json({ msg: 'Teacher Assignments  for this class', data });
    }
  } catch (error) {
    next(error);
  }
};

export default studentAssignment;
