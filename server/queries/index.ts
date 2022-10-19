import { createUser, findUserByEmail } from './userQueries';
import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';
import { getClassFeedbackQuery, getAnnouncementQuery } from './class';

export {
  createUser,
  createParent,
  createStudent,
  createTeacher,
  findUserByEmail,
  getAnnouncementQuery,
  getClassFeedbackQuery,
};
