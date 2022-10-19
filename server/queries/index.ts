import { createUser, findUserByEmail } from './userQueries';
import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';
import { addNewFeedbackQuery, getAnnouncementQuery } from './class';

export {
  createUser,
  createParent,
  createStudent,
  createTeacher,
  findUserByEmail,
  addNewFeedbackQuery,
  getAnnouncementQuery,
};
