import { Router } from 'express';
import {
  putStudentHealth, getStudentClasses, getStudentTests, getStudentGrade, getStudentInfo,
} from '../controllers';
import {
  userAuth,
  studentAuth,
  parentAuth,
  studentAndParent,
  studentAndParentAndTeacher,
  studentInfoMiddleware,
} from '../middlewares';

const studentRouter = Router();

studentRouter.put('/:studentId/health', userAuth, parentAuth, putStudentHealth);
studentRouter.get('/classes', userAuth, studentAuth, getStudentClasses);
studentRouter.get('/:studentId/tests', userAuth, studentAndParent, getStudentTests);
studentRouter.get('/:studentId/grades', userAuth, studentAndParentAndTeacher, getStudentGrade);
studentRouter.get('/:studentId/info', userAuth, studentInfoMiddleware, getStudentInfo);

export default studentRouter;
