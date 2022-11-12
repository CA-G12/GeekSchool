import { Router } from 'express';
import {
  putStudentHealth,
  getStudentClasses,
  getStudentTests,
  getStudentGrade,
  getStudentInfo,
  getIfStudentUserExists,
  postStudentReports
} from '../controllers';
import {
  userAuth,
  parentAuth,
  studentAndParent,
  studentAndParentAndTeacher,
  teacherAuth
} from '../middlewares';

const studentRouter = Router();

studentRouter.put('/:studentId/health', userAuth, parentAuth, putStudentHealth);
studentRouter.get('/:studentId/classes', userAuth, studentAndParentAndTeacher, getStudentClasses);
studentRouter.get('/:studentId/tests', userAuth, studentAndParent, getStudentTests);
studentRouter.get('/:studentId/grades', userAuth, studentAndParentAndTeacher, getStudentGrade);
studentRouter.get('/:studentId/info', userAuth, getStudentInfo); // ? studentInfoMiddleware,
studentRouter.post('/validate', getIfStudentUserExists);
studentRouter.post('/:studentId/reports', userAuth, teacherAuth, postStudentReports);

export default studentRouter;
