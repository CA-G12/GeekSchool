import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import { getAnnouncement, getFeedback } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/feedback', userAuth, teacherAuth, getFeedback);

export default classRouter;
