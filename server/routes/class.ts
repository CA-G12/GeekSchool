import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import {
  getAnnouncement, deleteStudentFromClass, recommended, getClassQuestions,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.delete('/:classId/student', userAuth, teacherAuth, deleteStudentFromClass);

classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);

export default classRouter;
