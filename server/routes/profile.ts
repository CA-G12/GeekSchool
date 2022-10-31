import { Router } from 'express';

import {
  userAuth, parentAuth, teacherAuth, studentRelatedToParent, studentAuth,
} from '../middlewares';
import {
  getParentStudent, getTeachersClasses, getReports, getStudentHealth,
} from '../controllers';

const profilesRouter = Router();
profilesRouter.get('/parent/:parentId/students', userAuth, parentAuth, getParentStudent);
profilesRouter.get('/teacher/:teacherId/classes', userAuth, teacherAuth, getTeachersClasses);
profilesRouter.get('/student/:studentId/reports', userAuth, studentRelatedToParent, getReports);
profilesRouter.get('/student/:studentId/health', userAuth, studentAuth, getStudentHealth);
profilesRouter.get('/student/:studentId/reports', userAuth, studentRelatedToParent, getReports);

export default profilesRouter;
