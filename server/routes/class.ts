import {
  userAuth, studentAndTeacher, teacherAuth, studentAuth,
} from '../middlewares';
import {
  getAnnouncement,
  getClassQuestions,
  recommended,
  addAnnouncement,
  putAnswerQuestion,
  getClassStudents,
  getAllStudentWhoSubmitTasks,
  putAssignmentTeacher,
  putAssignmentStudent,
  deleteAssignment,
  postQuestion,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, getAnnouncement);
classRouter.get('/class/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentWhoSubmitTasks);
classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.put('/class/:classId/assignment/teachers/:assignmentId', userAuth, teacherAuth, putAssignmentTeacher);
classRouter.put('/class/:classId/assignment/students/:assignmentId', userAuth, studentAuth, putAssignmentStudent);

classRouter.get('/class/:classId/students', userAuth, studentAndTeacher, getClassStudents);
classRouter.get('/class/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.delete('/class/assignment/:id', userAuth, teacherAuth, deleteAssignment);

classRouter.post('/class/:classId/announcement', userAuth, teacherAuth, addAnnouncement);

classRouter.put('/class/:classId/questions/:questionId', userAuth, teacherAuth, putAnswerQuestion);
classRouter.post('/class/:classId/questions', postQuestion);

export default classRouter;
