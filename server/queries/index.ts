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
  getClassGradesQuery,
  postTestQuery,
  getClassFeedbackQuery,
  deleteStudentFromClassQuery,
  deleteAssignmentQuery,
  postRecommendationQuery,
} from './class';

import getTeacherStudentsQuery from './teacher';
import { getStudentClassesQuery, studentGradesQuery } from './student';
import getParentInfoQuery from './parent';
import { createUser, findUserByEmail } from './userQueries';
import loginQuery from './loginQuery';
import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';
import { getParentStudentQuery, getTeacherClassesQuery } from './profile';

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
  getClassGradesQuery,
  studentGradesQuery,
  getTeacherStudentsQuery,
  getStudentClassesQuery,
  getParentStudentQuery,
  getTeacherClassesQuery,
  getParentInfoQuery,
};
