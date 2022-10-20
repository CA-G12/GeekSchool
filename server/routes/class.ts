import { userAuth, studentAndTeacher } from '../middlewares';
import { recommended, getAnnouncement, studentAssignment } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/assignments/:studentId?', userAuth, studentAndTeacher, studentAssignment);

export default classRouter;
