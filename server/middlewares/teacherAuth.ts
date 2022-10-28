import { Response, NextFunction } from 'express';

import { CustomError } from '../utils';

const teacherAuth = (req: any, res: Response, next: NextFunction) => {
  const { user } = req;

  if (user.role === 'teacher') {
    next();
  } else {
    next(new CustomError(401, 'Unauthenticated'));
  }
};

export default teacherAuth;
