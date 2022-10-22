import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import getAllStudentHowSubmitTasks from './class/getAllStudentHowSubmitTasks';
import {
  recommended, getAnnouncement, getClassQuestions, getClassStudents,
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
  login,
};
