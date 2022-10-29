import { Router } from 'express';

import { getStudentClasses, getStudentTests } from '../controllers';
import { userAuth, studentAuth } from '../middlewares';

const studentRouter = Router();

studentRouter.get('/classes', userAuth, studentAuth, getStudentClasses);
studentRouter.get('/tests', userAuth, studentAuth, getStudentTests);

export default studentRouter;
