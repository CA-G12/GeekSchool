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

import {
  getParentStudent, getTeachersClasses, getReports, getStudentHealth,
} from './profiles';
import getStudentClasses from './student';
import getTeacherStudents from './teacher';

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
  getTeacherStudents,
  getStudentClasses,
  getParentStudent,
  getTeachersClasses,
  getReports,
  getStudentHealth,
};
