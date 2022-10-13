import { Request, Response, NextFunction } from 'express';
import { verify, Secret } from 'jsonwebtoken';

import { secretKey } from '../config/environment';
import CustomError from '../utils/customError';

interface CustomRequest extends Request {
  user: object | unknown;
}

const userAuth = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token: string = req.cookies;

  if (!token) {
    throw new CustomError(401, 'Unauthenticated!'); // ? Token is invalid.
  }

  verify(token, secretKey as Secret, (err, decoded) => {
    if (err) {
      throw new CustomError(401, 'Unauthenticated!'); // ? Token is invalid.
    }

    req.user = decoded;

    next();
  });
};

export default userAuth;
