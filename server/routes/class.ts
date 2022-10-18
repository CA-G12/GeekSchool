import { userAuth, studentAndTeacher, studentAuth } from '../middlewares';
import { getAnnouncement, postQuestion } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.post('/class/:classId/questions', userAuth, studentAuth, postQuestion);

export default classRouter;
