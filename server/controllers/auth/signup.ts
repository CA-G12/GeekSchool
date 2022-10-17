import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';

import {
  createUser, createTeacher, findUserByEmail,
} from '../../queries';
import createParentAccount from './signupHelpers/createParent';

import {
  CustomError,
  userValidation,
  signToken,
  UserRequestInterface,
} from '../../utils';

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
      const parent = await createParentAccount({
        name, email, hashedPassword, mobile, location, role,
      }, children);
      console.log(parent, 3333);
      if (parent === null) throw new CustomError(422, 'The email does not exist!');
    } else if (role === 'teacher') {
      user = await createUser({
        name, email, mobile, hashedPassword, role, location,
      });
      await createTeacher(user.getDataValue('id'));
    } else {
      user = await createUser({
        name, email, mobile, hashedPassword, role, location,
      });
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
    // eslint-disable-next-line no-console
    console.log('signup controller', error);

    next(error);
  }
};

// teacher - parent - students

// teacher
// validation
// check email existence
// create user(teacher) -> create teacher -> response

// parent
// validation
// check email existence
// validate children emails exists
// - in case of [] pass
// - in case [...] and all exists pass
// - in case one of the [] doesn't exist
// create user(parent) -> create parent -> map children to this parent -> response

// teacher
// validation
// check email existence
// create user(student) -> response

// validation [schema with a validator fn]
// Query to get user by email [apply condition over the result]
// in case the role is parent -> createParent({user, emails})
// in case the role is teacher -> createTeacher(user,)
// in case the role is student -> createStudent(user)

// const createUserHandlers = {
//   "parent":  createParent,
//   "teacher": createTeacher,
//   "student": createStudent
// }

// try {

//   try {
// validate
//   } catch(err) {
// // custmoize error then throw again
//   }

//   checkEmail

// if(emailExist) thrw custm error

//   const createUser = createUserHandlers[req.body.role]

//   const user = await createUser()
//   resizeBy.status(201).json(user)
// } catch(err) {
//   next(err)
// }

export default signup;
