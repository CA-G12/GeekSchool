import { Response, NextFunction } from 'express';
import { studentParentRelationQuery } from '../queries';
import { CustomError } from '../utils';

const studentRelatedToParent = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const { studentId } = req.params;

    if (role === 'teacher') next();
    else if (role === 'parent') {
      const { data }:any = await studentParentRelationQuery(id, studentId);
      const isRelated = data.length;
      if (!isRelated) throw new CustomError(401, 'unAuthenticated');
      next();
    }
  } catch (error) {
    next(error);
  }
};

export default studentRelatedToParent;
