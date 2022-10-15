import { Response, NextFunction } from 'express';

import { CustomError, CustomRequest } from '../utils';

const parentAuth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const { role } = req.user;

  if (role !== 'parent') {
    next(new CustomError(401, 'Unauthenticated!'));
  } else {
    next();
  }
};

export default parentAuth;
