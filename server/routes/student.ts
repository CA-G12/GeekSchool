import { Router } from 'express';
import { putStudentHealth, getStudentClasses, getStudentTests } from '../controllers';
import { userAuth, studentAuth, parentAuth, studentAndParent } from '../middlewares';

const studentRouter = Router();

studentRouter.put('/:studentId/health', userAuth, parentAuth, putStudentHealth);
studentRouter.get('/classes', userAuth, studentAuth, getStudentClasses);
studentRouter.get('/:studentId/tests', userAuth, studentAndParent, getStudentTests);

export default studentRouter;
