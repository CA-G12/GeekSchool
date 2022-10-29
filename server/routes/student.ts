import { Router } from 'express';

import {
  userAuth,
  studentAuth,
} from '../middlewares';

import { getStudentGrade } from '../controllers';

const studentRouter = Router();

studentRouter.get('/:studentId/grades', userAuth, studentAuth, getStudentGrade);

export default studentRouter;
