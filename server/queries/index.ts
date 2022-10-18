import submittedAndNotSubmittedNum from './classQueries';
import { createUser, findUserByEmail } from './userQueries';
import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';

export {
  createUser,
  createParent,
  createStudent,
  createTeacher,
  findUserByEmail,
  submittedAndNotSubmittedNum,
};
