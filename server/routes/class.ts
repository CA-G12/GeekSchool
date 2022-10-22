import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import {
  getAnnouncement, recommended, getClassQuestions, getAllStudentHowSubmitTasks, getClassStudents,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, getAnnouncement);
classRouter.get('/class/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentHowSubmitTasks);
classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/students', userAuth, studentAndTeacher, getClassStudents);

classRouter.get('/class/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);

export default classRouter;
