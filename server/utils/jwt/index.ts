import { verify, sign, Secret } from 'jsonwebtoken';

import { secretKey } from '../../config/environment';
import { PayloadInterface } from '../interfaces';

const signToken = (payload: PayloadInterface) => new Promise((resolve, reject) => {
  sign(payload, secretKey as Secret, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

const verifyToken = (token: string) => new Promise((resolve, reject) => {
  verify(token, secretKey as Secret, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});

const generateToken = (
  payload: { id: string, name: string, role: string },
) => new Promise((res, rej) => {
  sign(payload, secretKey as Secret, (error, decoded) => {
    if (error) {
      rej(error);
    } else {
      res(decoded);
    }
  });
});

export {
  verifyToken,
  generateToken,
  signToken,
};
