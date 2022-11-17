import { Response, NextFunction } from 'express';
import { studentParentRelationQuery, getUserIdFromTableQuery } from '../queries';
import { CustomError } from '../utils';

const studentAndParentAndTeacher = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const userId = await getUserIdFromTableQuery(role, id);

    const { studentId } = req.params;

    if (role === 'teacher') next();
    else if (role === 'student') {
      if (+studentId === id) next();
      else { throw new CustomError(401, 'Unauthenticated'); }
    } else if (role === 'parent') {
      const data: any = await studentParentRelationQuery(userId?.getDataValue('id'), studentId);

      if (data.length) next();
      else { throw new CustomError(401, 'Unauthenticated'); }
    } else { throw new CustomError(401, 'Unauthenticated'); }
  } catch (error) {
    next(error);
  }
};

export default studentAndParentAndTeacher;
