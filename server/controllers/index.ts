import {
  signup, logout, userData, login,
} from './auth';
import { serverError, notFound } from './errors';
import {
  addNewAssignment,
  getStats,
  recommended,
  getAnnouncement,
  getClassQuestions,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
  putAnswerQuestion,
  addNewFeedback,
  getClassStudents,
  postTest,
  getFeedback,
  getAllStudentWhoSubmitTasks,
  deleteStudentFromClass,
  getAssignments,
  deleteAssignment,
  postQuestion,
  getClassGrades,

  postRecommendation,
} from './class';

import { getParentStudent } from './profiles';

export {
  signup,
  logout,
  userData,
  serverError,
  notFound,
  recommended,
  getAnnouncement,
  addNewAssignment,
  getFeedback,
  addNewFeedback,
  postQuestion,
  deleteStudentFromClass,
  getAllStudentWhoSubmitTasks,
  getStats,
  getAssignments,
  deleteAssignment,
  getClassStudents,
  getClassQuestions,
  putAnswerQuestion,
  login,
  postTest,
  postRecommendation,
  putAssignmentTeacher,
  putAssignmentStudent,
  addAnnouncement,
  getClassGrades,
  getParentStudent,
};
