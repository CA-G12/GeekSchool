import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';

import {
  createUser,
  createTeacher,
  findUserByEmail,
  createParent,
  createStudent,
  putParentIdForStudentQuery,
  createStudentHealthQuery,
  getUserIdFromTableQuery,
} from '../../queries';

import {
  CustomError,
  userValidation,
  signToken,
  UserRequestInterface,
} from '../../utils';

const putParentIdForStudent = async (child: string, parentId: number) => {
  const studentUser = await findUserByEmail(child);

  const studentId = studentUser?.getDataValue('id');
  const studentData = await getUserIdFromTableQuery('student', studentId);

  await putParentIdForStudentQuery(studentData?.getDataValue('id'), parentId);
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      name, email, password, confPassword, role, location, mobile, children,
    }: UserRequestInterface = req.body;

    await userValidation({
      name, email, mobile, password, confPassword, role, location,
    });

    const doesEmailExist = await findUserByEmail(email);
    if (doesEmailExist) throw new CustomError(422, 'The email does already exist!');

    const hashedPassword = await hash(password, 12);
    let user: {
      getDataValue: Function
    } = {
      getDataValue: () => {},
    };

    if (role === 'parent') {
      user = await createUser({
        name, email, password: hashedPassword, mobile, location, role,
      });
      const parent = await createParent(user.getDataValue('id'));

      children?.forEach((child) => {
        putParentIdForStudent(child, parent.getDataValue('id'));
      });
    } else if (role === 'teacher') {
      user = await createUser({
        name, email, mobile, password: hashedPassword, role, location,
      });
      await createTeacher(user.getDataValue('id'));
    } else if (role === 'student') {
      user = await createUser({
        name, email, mobile, password: hashedPassword, role, location,
      });
      const student = await createStudent(user.getDataValue('id'));
      await createStudentHealthQuery(student.getDataValue('id'));
    }

    const token = await signToken({ id: user.getDataValue('id'), name, role });
    res.cookie('token', token).status(201).json(
      {
        data: {
          id: user.getDataValue('id'),
          role,
          name,
        },
        msg: 'Account is created successfully!',
      },
    );
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'Wrong data is inserted!'));
    } else next(error);
  }
};

export default signup;
