import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import { getAnnouncement, putAssignment } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.put('/class/:classId/assignment/:assignmentId', userAuth, teacherAuth, putAssignment);

export default classRouter;
