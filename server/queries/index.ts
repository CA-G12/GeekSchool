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

import { createUser, findUserByEmail } from './userQueries';

import { putStudentHealthQuery } from './students';

import getTeacherStudentsQuery from './teacher';
import getStudentClassesQuery from './student';
import getParentInfoQuery from './parent';
import loginQuery from './loginQuery';
import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';
import { getParentStudentQuery, getTeacherClassesQuery } from './profile';

import getTeacherScheduleQuery from './getTeacherScheduleQuery';

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
  getTeacherScheduleQuery,
  putStudentHealthQuery,
  getTeacherStudentsQuery,
  getStudentClassesQuery,
  getParentStudentQuery,
  getTeacherClassesQuery,
  getParentInfoQuery,
};
