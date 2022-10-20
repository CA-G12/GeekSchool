import { userAuth, studentAndTeacher, teacherAuth } from '../middlewares';
import {
  getAnnouncement, deleteStudentFromARequest, recommended, getClassQuestions,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.delete('/:classId/student/delete', userAuth, teacherAuth, deleteStudentFromARequest);

classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);

export default classRouter;
