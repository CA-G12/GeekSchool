import {
  addNewFeedbackQuery,
  classStats,
  getAnnouncementQuery,
  recommendedQueries,
  studentAssignmentQuery,
  teacherAssignmentQuery,
  getClassQuestionsQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getStudentTasksQuery,
  postTestQuery,
  getClassFeedbackQuery,
  deleteStudentFromClassQuery,
  deleteAssignmentQuery,
  postRecommendationQuery,
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
  addNewFeedbackQuery,
  classStats,
  getAnnouncementQuery,
  getClassFeedbackQuery,
  studentAssignmentQuery,
  teacherAssignmentQuery,
  recommendedQueries,
  loginQuery,
  deleteStudentFromClassQuery,
  deleteAssignmentQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getClassQuestionsQuery,
  postTestQuery,
  postRecommendationQuery,
  getStudentTasksQuery,
};
