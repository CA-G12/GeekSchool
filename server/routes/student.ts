import { Router } from 'express';

import { getStudentClasses, getStudentGrade } from '../controllers';
import { userAuth, studentAuth } from '../middlewares';

const studentRouter = Router();

studentRouter.get('/classes', userAuth, studentAuth, getStudentClasses);
studentRouter.get('/:studentId/grades', userAuth, studentAuth, getStudentGrade);

export default studentRouter;
