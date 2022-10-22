import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import {
  getAnnouncement, getClassStudents, recommended, getClassQuestions, postTest,
} from './class';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  getClassStudents,
  getClassQuestions,
  login,
  postTest,
};
