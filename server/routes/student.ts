import { Router } from 'express';
import {
  putStudentHealth,
  getStudentClasses,
  getStudentTests,
  getStudentGrade,
  getStudentInfo,
  getIfStudentUserExists,
  postStudentReports,
  getStudentHealth,
  putParentIdForStudent
} from '../controllers';
import {
  userAuth,
  parentAuth,
  studentAndParentAndTeacher,
  teacherAuth,
} from '../middlewares';

const studentRouter = Router();

studentRouter.put('/:studentId/health', userAuth, parentAuth, putStudentHealth);
studentRouter.get('/:studentId/classes', userAuth, studentAndParentAndTeacher, getStudentClasses);
studentRouter.get('/:studentId/tests', userAuth, studentAndParentAndTeacher, getStudentTests);
studentRouter.get('/:studentId/grades', userAuth, studentAndParentAndTeacher, getStudentGrade);
studentRouter.get('/:studentId/info', userAuth, studentAndParentAndTeacher, getStudentInfo);
studentRouter.get('/:studentId/health', userAuth, studentAndParentAndTeacher, getStudentHealth);
studentRouter.post('/validate', getIfStudentUserExists);
studentRouter.post('/:studentId/reports', userAuth, teacherAuth, postStudentReports);
studentRouter.put('/addStudent', userAuth, parentAuth, putParentIdForStudent);


export default studentRouter;
