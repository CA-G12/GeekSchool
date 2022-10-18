import { Response, NextFunction } from 'express';

import { CustomError, CustomRequest } from '../utils';

const studentAuth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const role = req.user?.role;

  if (role !== 'student') {
    throw new CustomError(401, 'Unauthenticated!');
  } else {
    next();
  }
};

export default studentAuth;
