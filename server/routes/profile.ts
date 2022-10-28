import { Router } from 'express';

import {
  userAuth, parentAuth, teacherAuth, studentRelatedToParent,
} from '../middlewares';
import { getParentStudent, getTeachersClasses, getReports } from '../controllers';

const profilesRouter = Router();
profilesRouter.get('/parent/:parentId/students', userAuth, parentAuth, getParentStudent);
profilesRouter.get('/teacher/:teacherId/classes', userAuth, teacherAuth, getTeachersClasses);
profilesRouter.get('/student/:student/reports', userAuth, parentAuth, studentRelatedToParent, getReports);

export default profilesRouter;
