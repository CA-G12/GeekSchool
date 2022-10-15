import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

import {
  User, Parent, Teacher, Student,
} from '../../models';

import {
  CustomError,
  userValidation,
  signToken,
  UserInterface,
} from '../../utils';

const signup = async (req: Request, res: Response) => {
  const {
    name, email, password, confPassword, role, location, mobile, children,
  }: UserInterface = req.body;

  const doesEmailExist = await User.findOne({ where: { email } });
  if (doesEmailExist) {
    res.status(400).json({ success: false, message: 'The email does already exist!!!' });
  }

  try {
    await userValidation({
      name, email, mobile, password, confPassword, role, location,
    });

    const hashedPassword = await hash(password, 12);

    const user = await User.create({
      name, email, hashedPassword, mobile, role, location,
    }); // ! Hashed password should be in the user model!

    if (role === 'parent') {
      const parent = await Parent.create({ user_id: user.getDataValue('id') });

      children?.forEach(async (child) => {
        const childStudent = await Student.findOne({
          include: { model: User, where: { email: child } },
        });

        if (childStudent) {
          await childStudent.update({ parent_id: parent.getDataValue('id') });
        } else {
          res.status(404).json({ success: false, message: 'No such accounts for your children!!!' });
        }
      });
    } else if (role === 'teacher') {
      await Teacher.create({ user_id: user.getDataValue('id') });
    } else if (role === 'student') {
      await Student.create({ user_id: user.getDataValue('id') }); // ! parent_id
    }

    const token = await signToken({ id: user.getDataValue('id'), name, role });

    res.cookie('token', token).status(201).json(
      {
        success: true,
        data: {
          id: user.getDataValue('id'),
          role,
          name,
        },
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('signup controller', error);

    if (error.message) {
      throw new CustomError(422, `error: ${error.message}`);
    } else {
      throw new CustomError(500, 'Internal server error!!!');
    }
  }
};

export default signup;
