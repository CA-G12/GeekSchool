import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import getAllStudentHowSubmitTasks from './class/getAllStudentHowSubmitTasks';
import {
  recommended,
  getAnnouncement,
  getClassQuestions,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
  putAnswerQuestion,
  getClassStudents,
  getClassGrades,
} from './class';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  getAllStudentHowSubmitTasks,
  getClassStudents,
  getClassQuestions,
  putAnswerQuestion,
  login,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
  getClassGrades,
};
