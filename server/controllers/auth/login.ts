import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { loginQuery } from '../../queries';
import { CustomError, loginValidate, generateToken } from '../../utils';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, loginPassword } = req.body;
    await loginValidate({ email, loginPassword });
    const { count, rows }: any = await loginQuery(email);
    if (!count) {
      throw new CustomError(400, "email doesn't exist");
    }
    const hashedPassword = await compare(loginPassword, rows[0].getDataValue('password'));
    if (!hashedPassword) {
      throw new CustomError(400, 'invalid password');
    }
    await generateToken({ id: rows[0].getDataValue('id'), username: rows[0].getDataValue('name'), role: rows[0].getDataValue('role') });
    res.json({ mag: 'logged in successfully' });
  } catch (err) {
    res.status(err.status).json({ msg: err.message });
    next({ msg: err.message });
  }
};

export default login;
