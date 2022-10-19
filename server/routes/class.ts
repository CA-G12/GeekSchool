import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import { getAnnouncement, getAllStudentHowSubmitTasks } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/assignment/:assignmentId/students', teacherAuth, getAllStudentHowSubmitTasks);

export default classRouter;
