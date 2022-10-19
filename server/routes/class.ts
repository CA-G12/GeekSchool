import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import { getAnnouncement, deleteStudentFromARequest } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.delete('/class/:classId/student/delete', userAuth, teacherAuth, deleteStudentFromARequest);

export default classRouter;
