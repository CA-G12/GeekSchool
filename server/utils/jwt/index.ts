import { verify, Secret, sign } from 'jsonwebtoken';

import { secretKey } from '../../config/environment';

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
  payload: { id: string, username: string, role: string },
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
};
