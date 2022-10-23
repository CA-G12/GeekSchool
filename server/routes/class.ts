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
  getClassQuestions,
  getClassStudents,
  getAllStudentWhoSubmitTasks,
  putAssignmentTeacher,
  putAssignmentStudent,
  getClassGrades,
  addNewFeedback,
  deleteStudentFromClass,
  deleteAssignment,
  postQuestion,
  putAnswerQuestion,
  getAssignments,
  addAnnouncement,
} from '../controllers';

const classRouter = Router();

classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/statistics', userAuth, teacherAuth, getStats);
classRouter.get('/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentWhoSubmitTasks);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.put('/:classId/assignment/teachers/:assignmentId', userAuth, teacherAuth, putAssignmentTeacher);
classRouter.put('/:classId/assignment/students/:assignmentId', userAuth, studentAuth, putAssignmentStudent);
classRouter.get('/:classId/students', userAuth, studentAndTeacher, getClassStudents);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.get('/:classId/assignments', userAuth, studentAndTeacher, getAssignments);
classRouter.delete('/assignment/:id', userAuth, teacherAuth, deleteAssignment);
classRouter.get('/class/:classId/grades', getClassGrades);

classRouter.post('/:classId/announcement', userAuth, teacherAuth, addAnnouncement);
classRouter.put('/:classId/questions/:questionId', userAuth, teacherAuth, putAnswerQuestion);
classRouter.post('/:classId/questions', userAuth, studentAuth, postQuestion);
classRouter.post('/:classId/feedback', userAuth, studentAuth, addNewFeedback);
classRouter.delete('/:classId/student', userAuth, teacherAuth, deleteStudentFromClass);

export default classRouter;
