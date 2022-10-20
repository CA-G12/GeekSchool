import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import {
  recommended, getAnnouncement, getClassQuestions, putAssignmentTeacher, putAssignmentStudent,
} from './class';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  getClassQuestions,
  login,
  putAssignmentTeacher,
  putAssignmentStudent,
};
