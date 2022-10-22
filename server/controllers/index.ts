import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import {
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
  getAllStudentHowSubmitTasks,
  getClassStudents,
  getClassQuestions,
  putAnswerQuestion,
  login,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
};
