import { Router } from 'express';
import {
  userAuth, studentAndTeacher, studentAuth, teacherAuth,
} from '../middlewares';

import {
  getAnnouncement,
  getClassQuestions,
  recommended,
  addAnnouncement,
  putAnswerQuestion,
  getClassStudents,
  getAllStudentHowSubmitTasks,
  putAssignmentTeacher,
  putAssignmentStudent,
  addNewFeedback,
} from '../controllers';

const classRouter = Router();

classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.post('/:classId/feedback', userAuth, studentAuth, addNewFeedback);
classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.get('/:classId/students', userAuth, studentAndTeacher, getClassStudents);
classRouter.get('/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentHowSubmitTasks);
classRouter.put('/:classId/assignment/teachers/:assignmentId', userAuth, teacherAuth, putAssignmentTeacher);
classRouter.put('/:classId/assignment/students/:assignmentId', userAuth, studentAuth, putAssignmentStudent);
classRouter.put('/:classId/questions/:questionId', userAuth, teacherAuth, putAnswerQuestion);
classRouter.post('/:classId/announcement', userAuth, teacherAuth, addAnnouncement);

export default classRouter;
