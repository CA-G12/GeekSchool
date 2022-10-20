import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import recommended from './class';
import getAnnouncement from './class/getAnnouncement';
import getAllStudentHowSubmitTasks from './class/getAllStudentHowSubmitTasks';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  getAllStudentHowSubmitTasks,
  login,
};
