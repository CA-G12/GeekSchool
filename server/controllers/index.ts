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
  getClassStudents,
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
  putAssignmentTeacher,
  putAssignmentStudent,
};
