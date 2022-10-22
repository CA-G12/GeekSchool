import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';

import {
  getStats,
  recommended,
  getAnnouncement,
  getClassQuestions,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
  putAnswerQuestion,
  getClassStudents,
  getAssignments,
  deleteAssignment,
  getAllStudentWhoSubmitTasks,
  postQuestion,

} from './class';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  postQuestion,
  getStats,
  getAssignments,
  deleteAssignment,
  getAllStudentWhoSubmitTasks,
  getClassStudents,
  getClassQuestions,
  putAnswerQuestion,
  login,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
};
