import { Router } from 'express';

import { userAuth, parentAuth, teacherAuth } from '../middlewares';
import { getParentStudent, getTeachersClasses } from '../controllers';

const profilesRouter = Router();
profilesRouter.get('/parent/:parentId/students', userAuth, parentAuth, getParentStudent);
profilesRouter.get('/teacher/:teacherId/classes', userAuth, teacherAuth, getTeachersClasses);

export default profilesRouter;
