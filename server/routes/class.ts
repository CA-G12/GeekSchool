import { userAuth, studentAndTeacher, studentAuth } from '../middlewares';
import {
  getAnnouncement, addNewFeedback, getClassQuestions, recommended,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.post('/:classId/feedback/add', userAuth, studentAuth, addNewFeedback);
classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);

export default classRouter;
