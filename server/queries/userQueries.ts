import { User } from '../models';

const createUser = (obj: {
  name: string,
  email: string,
  mobile: string,
  hashedPassword: string,
  role: string,
  location: string,
}) => User.create(obj);

const findUserByEmail = (email: string) => User.findOne({ where: { email } });

export {
  createUser,
  findUserByEmail,
};
