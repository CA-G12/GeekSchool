import { Router } from 'express';

import { getTeacherStudents } from '../controllers';
import { userAuth, teacherAuth } from '../middlewares';

const teacherRouter = Router();

teacherRouter.get('/students', userAuth, teacherAuth, getTeacherStudents);

export default teacherRouter;
