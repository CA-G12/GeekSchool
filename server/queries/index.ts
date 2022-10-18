import { createUser, findUserByEmail } from './userQueries';
import recommendedQueries from './classQueries';

import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';

export {
  createUser,
  createParent,
  createStudent,
  createTeacher,
  findUserByEmail,
  recommendedQueries,
};
