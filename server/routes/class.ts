import {
  userAuth, studentAndTeacher, teacherAuth, studentAuth,
} from '../middlewares';
import {
  getAnnouncement, putAssignmentTeacher, putAssignmentStudent, getClassQuestions, recommended,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.put('/class/:classId/assignment/teachers/:assignmentId', userAuth, teacherAuth, putAssignmentTeacher);
classRouter.put('/class/:classId/assignment/students/:assignmentId', userAuth, studentAuth, putAssignmentStudent);

classRouter.get('/class/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);

export default classRouter;
