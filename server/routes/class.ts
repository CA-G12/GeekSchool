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
  getAllStudentHowSubmitTasks,
  addAnnouncement,
  putAnswerQuestion,
  putAssignmentTeacher,
  putAssignmentStudent,
  getFeedback,
  deleteAssignment,
  getAssignments,
} from '../controllers';

const classRouter = Router();

classRouter.get('/:classId/statistics', userAuth, teacherAuth, getStats);
classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/:classId/feedback', userAuth, teacherAuth, getFeedback);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.get('/:classId/students', userAuth, studentAndTeacher, getClassStudents);
classRouter.get('/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentHowSubmitTasks);
classRouter.put('/:classId/assignment/teachers/:assignmentId', userAuth, teacherAuth, putAssignmentTeacher);
classRouter.put('/:classId/assignment/students/:assignmentId', userAuth, studentAuth, putAssignmentStudent);
classRouter.post('/:classId/announcement', userAuth, teacherAuth, addAnnouncement);
classRouter.put('/:classId/questions/:questionId', userAuth, teacherAuth, putAnswerQuestion);
classRouter.delete('/assignment/:id', userAuth, teacherAuth, deleteAssignment);
classRouter.get('/:classId/assignments', userAuth, studentAndTeacher, getAssignments);

export default classRouter;
