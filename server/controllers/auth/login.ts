/* eslint-disable max-len */
import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { loginQuery } from '../../queries';
import { CustomError, loginValidate } from '../../utils';

const login = async (req: Request, res: Response) => {
  try {
    const { email, loginPassword } = req.body;

    try {
      await loginValidate({ email, loginPassword });
    } catch (err) {
      throw new CustomError(400, err.details[0].message);
    }

    const { count, rows }: any = await loginQuery(email);
    if (!count) {
      throw new CustomError(401, "email doesn't exist");
    }
    const hashedPassword = await compare(loginPassword, rows[0].getDataValue('password'));
    if (!hashedPassword) {
      throw new CustomError(401, 'invalid password');
    }
    res.json({ mag: 'logged in successfully' });
  } catch (err) {
    res.json({ msg: err });
  }
};

export default login;
