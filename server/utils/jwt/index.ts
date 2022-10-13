import { verify, Secret } from 'jsonwebtoken';

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

export default verifyToken;
