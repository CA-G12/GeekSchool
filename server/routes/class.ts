import { userAuth, studentAndTeacher } from '../middlewares';
import {
  getAnnouncement, getClassQuestions, recommended, deleteAssignment,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);

classRouter.get('/class/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.delete('/class/assignment/:id', userAuth, studentAndTeacher, deleteAssignment);
export default classRouter;
