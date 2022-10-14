import { Response, NextFunction } from 'express';

import { CustomError, CustomRequest, verifyToken } from '../utils';

const userAuth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const token: string = req.cookies;

  if (!token) {
    throw new CustomError(401, 'Unauthenticated!'); // ? Token is invalid.
  }

  try {
    const user = await verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(new CustomError(401, 'Unauthenticated!'));
  }
};

export default userAuth;
