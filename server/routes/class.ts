import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import { recommended, getAnnouncement, getAllStudentHowSubmitTasks } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentHowSubmitTasks);

export default classRouter;
