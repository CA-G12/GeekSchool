import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import {
  getAnnouncement, getFeedback, recommended, getClassQuestions,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/:classId/feedback', userAuth, teacherAuth, getFeedback);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);

export default classRouter;
