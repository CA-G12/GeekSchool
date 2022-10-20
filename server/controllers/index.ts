import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import recommended from './class';
import getAnnouncement from './class/getAnnouncement';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  login,
};
