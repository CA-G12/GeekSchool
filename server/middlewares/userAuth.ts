import { Response, NextFunction } from 'express';

import { CustomError, CustomRequest, verifyToken } from '../utils';

const userAuth = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token: string = req.cookies;

  if (!token) {
    throw new CustomError(401, 'Unauthenticated!'); // ? Token is invalid.
  }

  verifyToken(token, req, next);
};

export default userAuth;
