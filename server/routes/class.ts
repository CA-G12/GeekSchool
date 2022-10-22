import { Router } from 'express';
import { userAuth, teacherAuth, studentAndTeacher } from '../middlewares';
import {
  getStats, getAnnouncement, getClassQuestions, recommended, getClassStudents,
} from '../controllers';

const classRouter = Router();

classRouter.get('/:classId/statistics', userAuth, teacherAuth, getStats);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.get('/:classId/students', userAuth, studentAndTeacher, getClassStudents);

export default classRouter;
