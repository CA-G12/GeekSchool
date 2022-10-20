import { userAuth, studentAndTeacher } from '../middlewares';
import { recommended, getAnnouncement } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);

export default classRouter;
