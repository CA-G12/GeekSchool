import { createUser, findUserByEmail } from './userQueries';
import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';
import { getAnnouncementQuery, studentAssignmentQuery, teacherAssignmentQuery } from './class';

export {
  createUser,
  createParent,
  createStudent,
  createTeacher,
  findUserByEmail,
  getAnnouncementQuery,
  studentAssignmentQuery,
  teacherAssignmentQuery,
};
