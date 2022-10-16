import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';

import {
  createUser, createParent, createStudent, createTeacher, findUserByEmail,
} from '../../queries';

import {
  CustomError,
  userValidation,
  parentValidation,
  signToken,
  UserInterface,
} from '../../utils';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const {
    name, email, password, confPassword, role, location, mobile, children,
  }: UserInterface = req.body;

  try {
    const isUserValid = await userValidation({
      name, email, mobile, password, confPassword, role, location,
    });

    const doesEmailExist = await findUserByEmail(email);
    if (doesEmailExist) {
      throw new CustomError(422, 'The email does already exist!');
    }

    if (isUserValid.error) {
      throw new CustomError(400, 'Incompatible data!');
    }

    const hashedPassword = await hash(password, 12);

    const user = await createUser({
      name, email, mobile, hashedPassword, role, location,
    });

    if (role === 'parent') {
      const isParentValid = await parentValidation({ children });

      if (isParentValid.error) {
        throw new CustomError(400, 'Incompatible data!');
      }

      const parent = await createParent(user.getDataValue('id'));

      children?.forEach(async (child) => {
        const doesChildStudent = await findUserByEmail(child);

        if (doesChildStudent) {
          await createStudent(doesChildStudent.getDataValue('id'), parent.getDataValue('id'));
        } else { // ? unprocessable entity
          throw new CustomError(422, 'The email does not exist!');
        }
      });
    } else if (role === 'teacher') {
      await createTeacher(user.getDataValue('id'));
    }

    const token = await signToken({ id: user.getDataValue('id'), name, role });

    res.cookie('token', token).status(201).json(
      {
        data: {
          id: user.getDataValue('id'),
          role,
          name,
        },
        message: 'Account is created successfully!',
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('signup controller', error);

    next(error);
  }
};

export default signup;
