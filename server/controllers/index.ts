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
  getFeedback,
  getAllStudentHowSubmitTasks,
  getAssignments,
  deleteAssignment,
} from './class';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  getFeedback,
  getStats,
  getAssignments,
  deleteAssignment,
  getAllStudentHowSubmitTasks,
  getClassStudents,
  getClassQuestions,
  putAnswerQuestion,
  login,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
};
