import { userAuth, studentAndTeacher } from '../middlewares';
import { getAnnouncement, getClassStudents, recommended } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/students', userAuth, studentAndTeacher, getClassStudents);

export default classRouter;
