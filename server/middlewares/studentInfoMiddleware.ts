import { Response, NextFunction } from 'express';
import { studentParentRelationQuery } from '../queries';
import { CustomError } from '../utils';

const studentInfoMiddleware = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const { studentId } = req.params;

    if (role === 'teacher' || role === 'student') next();
    else if (role === 'parent') {
      const data = await studentParentRelationQuery(id, studentId);
      const isRelated = data[0]?.getDataValue('id');
      if (!isRelated) throw new CustomError(401, 'Unauthenticated');
      next();
    }
  } catch (error) {
    next(error);
  }
};
export default studentInfoMiddleware;
