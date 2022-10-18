import { Router } from 'express';
import { userAuth, teacherAuth } from '../middlewares';
import getStats from '../controllers/class/getStats';

const classRouter = Router();

classRouter.get('/:classId/statistics', userAuth, teacherAuth, getStats);

export default classRouter;
