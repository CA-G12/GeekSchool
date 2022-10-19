import { userAuth, studentAndTeacher, studentAuth } from '../middlewares';
import { getAnnouncement, addNewFeedback } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.post('/:classId/feedback/add', userAuth, studentAuth, addNewFeedback);

export default classRouter;
