import { userAuth, studentAndTeacher } from '../middlewares';
import { getAnnouncement } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);

// to test route without authentication
// classRouter.get('/class/:classId/announcement', getAnnouncement);

export default classRouter;
