import { Router } from 'express';

import { getTeacherSchedule } from '../controllers';

const teacherRouter = Router();

teacherRouter.get('/:teacherId/schedule', getTeacherSchedule);

export default teacherRouter;
