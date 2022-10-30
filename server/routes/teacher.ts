import { Router } from 'express';

import { getTeacherSchedule, getTeacherStudents } from '../controllers';
import { userAuth, teacherAuth } from '../middlewares';

const teacherRouter = Router();

teacherRouter.get('/schedule', userAuth, teacherAuth, getTeacherSchedule);

teacherRouter.get('/students', userAuth, teacherAuth, getTeacherStudents);

export default teacherRouter;
