import { createUser, findUserByEmail } from './userQueries';
import {
  getAnnouncementQuery,
  recommendedQueries,
  studentAssignmentQuery,
  teacherAssignmentQuery,
  getClassQuestionsQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getStudentTasksQuery,
  deleteAssignmentQuery,
} from './class';

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
  getAnnouncementQuery,
  studentAssignmentQuery,
  teacherAssignmentQuery,
  getClassQuestionsQuery,
  recommendedQueries,
  loginQuery,
  deleteAssignmentQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getStudentTasksQuery,
};
