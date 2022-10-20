import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import {
  getAnnouncement,
  addNewAssignment,
  recommended,
} from './class';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  addNewAssignment,
  login,
};
