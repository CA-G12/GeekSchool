import { submittedAndNotSubmittedNum } from './class';
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
