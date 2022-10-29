import { Router } from 'express';

import {
  userAuth,
  // studentAndTeacher,
  teacherAuth,
  // studentAuth,
} from '../middlewares';

import { teacherInfo } from '../controllers';

const teacherRouter = Router();

teacherRouter.get('/info', userAuth, teacherAuth, teacherInfo);

export default teacherRouter;
