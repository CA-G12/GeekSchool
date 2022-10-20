import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import putAssignment from './class/putAssignment';
import { recommended, getAnnouncement, getClassQuestions } from './class';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  putAssignment,
  getClassQuestions,
  login,
};
