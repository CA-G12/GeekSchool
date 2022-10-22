import {
  classStats,
  getAnnouncementQuery,
  recommendedQueries,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getClassQuestionsQuery,
  getStudentTasksQuery,
} from './class';
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
  classStats,
  getAnnouncementQuery,
  recommendedQueries,
  loginQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getClassQuestionsQuery,
  getStudentTasksQuery,
};
