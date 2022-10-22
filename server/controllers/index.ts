import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import postQuestion from './class/postQuestion';

import {
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
