import { NextFunction } from 'express';
import { verify, Secret } from 'jsonwebtoken';

import { secretKey } from '../../config/environment';
import { CustomError, CustomRequest } from '../index';

const verifyToken = (token: string, req: CustomRequest, next: NextFunction) => (
  verify(token, secretKey as Secret, (err, decoded) => {
    if (err) {
      throw new CustomError(401, 'Unauthenticated!');
    }

    req.user = decoded;

    next();
  }));

export default verifyToken;
