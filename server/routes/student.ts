import { Router } from 'express';
import { putStudentHealth, getStudentClasses, getStudentGrade } from '../controllers';
import { userAuth, studentAuth, parentAuth } from '../middlewares';

const studentRouter = Router();

studentRouter.put('/:studentId/health', userAuth, parentAuth, putStudentHealth);
studentRouter.get('/classes', userAuth, studentAuth, getStudentClasses);
studentRouter.get('/grades', userAuth, studentAuth, getStudentGrade);

export default studentRouter;
