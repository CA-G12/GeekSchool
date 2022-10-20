import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import { getAnnouncement, addNewAssignment } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.post('/:classId/assignment', userAuth, teacherAuth, addNewAssignment);

export default classRouter;
