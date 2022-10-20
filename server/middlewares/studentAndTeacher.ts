import { Response, NextFunction } from 'express';

import { CustomError, CustomRequest } from '../utils';

const studentAndTeacher = (req: CustomRequest, res: Response, next: NextFunction) => {
  const { user } = req;

  if (user.role === 'teacher' || user.role === 'student') {
    next();
  } else {
    next(new CustomError(401, 'Unauthenticated!'));
  }
};

export default studentAndTeacher;
