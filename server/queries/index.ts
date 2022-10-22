import { createUser, findUserByEmail } from './userQueries';
import {
  getAnnouncementQuery,
  recommendedQueries,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getClassQuestionsQuery,
  getStudentTasksQuery,
  getClassGradesQuery,
  getActivitiesQuery,
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
  recommendedQueries,
  loginQuery,
  deleteAssignmentQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getClassQuestionsQuery,
  getStudentTasksQuery,
  getClassGradesQuery,
  getActivitiesQuery,
};
