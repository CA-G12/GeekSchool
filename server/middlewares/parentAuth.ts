import { Response, NextFunction } from 'express';

import { CustomError, CustomRequest } from '../utils';

const parentAuth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const role = req.user?.role;

  if (role !== 'parent') {
    throw new CustomError(401, 'Unauthenticated!');
  } else {
    next();
  }
};

export default parentAuth;
