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
  addNewFeedback,
  getClassStudents,
  getAllStudentWhoSubmitTasks,
  deleteStudentFromClass,
  getAssignments,
  deleteAssignment,
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
  addNewFeedback,
  postQuestion,
  deleteStudentFromClass,
  getAllStudentWhoSubmitTasks,
  getStats,
  getAssignments,
  deleteAssignment,
  getClassStudents,
  getClassQuestions,
  putAnswerQuestion,
  login,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
};
