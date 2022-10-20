import { submittedAndNotSubmittedNum, getAnnouncementQuery, recommendedQueries } from './class';
import { createUser, findUserByEmail } from './userQueries';

import loginQuery from './loginQuery';
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
  getAnnouncementQuery,
  recommendedQueries,
  loginQuery,
};
