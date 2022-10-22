import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import getAllStudentHowSubmitTasks from './class/getAllStudentHowSubmitTasks';
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
} from './class';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
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
