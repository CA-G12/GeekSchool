import { Router } from 'express';

import { getStudentClasses } from '../controllers';
import { userAuth, studentAuth } from '../middlewares';

const studentRouter = Router();

studentRouter.get('/:studentId/classes', userAuth, studentAuth, getStudentClasses);

export default studentRouter;
