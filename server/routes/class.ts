import { Router } from 'express';

import {
  userAuth,
  studentAndTeacher,
  teacherAuth,
  studentAuth,
} from '../middlewares';

import {
  getStats,
  getAnnouncement,
  recommended,
  addNewAssignment,
  getClassQuestions,
  getClassStudents,
  getAllStudentWhoSubmitTasks,
  putAssignmentTeacher,
  putAssignmentStudent,
  getFeedback,
  addNewFeedback,
  deleteStudentFromClass,
  deleteAssignment,
  postQuestion,
  putAnswerQuestion,
  getAssignments,
  addAnnouncement,
} from '../controllers';

const classRouter = Router();

classRouter.get('/:classId/statistics', userAuth, teacherAuth, getStats);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.post('/:classId/assignment', userAuth, teacherAuth, addNewAssignment);
classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentWhoSubmitTasks);
classRouter.put('/:classId/assignment/teachers/:assignmentId', userAuth, teacherAuth, putAssignmentTeacher);
classRouter.put('/:classId/assignment/students/:assignmentId', userAuth, studentAuth, putAssignmentStudent);
classRouter.get('/:classId/students', userAuth, studentAndTeacher, getClassStudents);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.post('/:classId/announcement', userAuth, teacherAuth, addAnnouncement);
classRouter.put('/:classId/questions/:questionId', userAuth, teacherAuth, putAnswerQuestion);
classRouter.get('/:classId/feedback', userAuth, teacherAuth, getFeedback);
classRouter.post('/:classId/feedback', userAuth, studentAuth, addNewFeedback);
classRouter.delete('/:classId/student', userAuth, teacherAuth, deleteStudentFromClass);
classRouter.delete('/assignment/:id', userAuth, teacherAuth, deleteAssignment);
classRouter.post('/:classId/questions', userAuth, studentAuth, postQuestion);
classRouter.get('/:classId/assignments', userAuth, studentAndTeacher, getAssignments);

export default classRouter;
