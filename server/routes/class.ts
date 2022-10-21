import {
  userAuth, studentAndTeacher, teacherAuth,
} from '../middlewares';
import {
  getAnnouncement, addNewAssignment, getClassQuestions, recommended,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.post('/:classId/assignment', userAuth, teacherAuth, addNewAssignment);
classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);

classRouter.get('/class/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);

export default classRouter;
