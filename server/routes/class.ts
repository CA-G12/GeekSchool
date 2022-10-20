import { userAuth, studentAndTeacher } from '../middlewares';
import { recommended, getAnnouncement, getAssignments } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/assignments', userAuth, studentAndTeacher, getAssignments);

export default classRouter;
