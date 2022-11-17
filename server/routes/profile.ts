import { Router } from 'express';

import {
  userAuth, parentAuth, teacherAuth, studentAndParentAndTeacher,
} from '../middlewares';
import {
  getParentStudent, getTeachersClasses, getReports,
} from '../controllers';

const profilesRouter = Router();
profilesRouter.get('/parent/students', userAuth, parentAuth, getParentStudent);
profilesRouter.get('/teacher/:teacherId/classes', userAuth, teacherAuth, getTeachersClasses);
profilesRouter.get('/student/:studentId/reports', userAuth, studentAndParentAndTeacher, getReports);

export default profilesRouter;
