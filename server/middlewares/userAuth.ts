import { Response, NextFunction } from 'express';

import { CustomError, verifyToken } from '../utils';

const userAuth = async (req: any, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) {
    next(new CustomError(401, 'Unauthenticated!')); // ? Token is invalid.
  }

  try {
    const user = await verifyToken(token);

    req.user = user;
    next();
  } catch (error) {
    next(new CustomError(401, `Unauthenticated, ${error}`));
  }
};

export default userAuth;
