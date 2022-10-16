import { Response, NextFunction } from 'express';

import { CustomError, CustomRequest } from '../utils';

const teacherAuth = (req: CustomRequest, res: Response, next: NextFunction) => {
  const { user } = req;
  if (!user.role) {
    throw new CustomError(401, 'Unauthenticated!');
  }

  if (user.role === 'teacher') {
    next();
  } else {
    next(new CustomError(401, 'Unauthenticated!'));
  }
};

export default teacherAuth;
