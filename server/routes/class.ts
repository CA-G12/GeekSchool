import { userAuth, studentAndTeacher } from '../middlewares';
import { getAnnouncement, studentAssignment } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/assignments/:studentId?', userAuth, studentAndTeacher, studentAssignment);

export default classRouter;
