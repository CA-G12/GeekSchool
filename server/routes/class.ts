import {
  userAuth, studentAndTeacher, teacherAuth, studentAuth,
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
  getFeedback,
} from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/:classId/recommended', userAuth, studentAndTeacher, recommended);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/:classId/feedback', userAuth, teacherAuth, getFeedback);
classRouter.get('/:classId/questions', userAuth, studentAndTeacher, getClassQuestions);
classRouter.get('/:classId/students', userAuth, studentAndTeacher, getClassStudents);
classRouter.get('/:classId/assignment/:assignmentId/students', userAuth, teacherAuth, getAllStudentHowSubmitTasks);
classRouter.put('/:classId/assignment/teachers/:assignmentId', userAuth, teacherAuth, putAssignmentTeacher);
classRouter.put('/:classId/assignment/students/:assignmentId', userAuth, studentAuth, putAssignmentStudent);
classRouter.post('/:classId/announcement', userAuth, teacherAuth, addAnnouncement);
classRouter.put('/:classId/questions/:questionId', userAuth, teacherAuth, putAnswerQuestion);

export default classRouter;
