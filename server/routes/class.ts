import { Router } from 'express';

import {
  userAuth,
  studentAndTeacher,
  teacherAuth,
} from '../middlewares';

import {
  getStats,
  getAnnouncement,
  recommended,
  getClassQuestions,
  getClassStudents,
  getAllStudentHowSubmitTasks,
  addAnnouncement,
  putAnswerQuestion,
} from '../controllers';

const classRouter = Router();

classRouter.get('/:classId/statistics', userAuth, teacherAuth, getStats);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.get('/:classId/students', userAuth, studentAndTeacher, getClassStudents);
classRouter.get('/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentHowSubmitTasks);
classRouter.post('/:classId/announcement', userAuth, teacherAuth, addAnnouncement);
classRouter.put('/:classId/questions/:questionId', userAuth, teacherAuth, putAnswerQuestion);

export default classRouter;
