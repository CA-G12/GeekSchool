import { Router } from 'express';
import { userAuth, teacherAuth, studentAndTeacher } from '../middlewares';
import { getStats, getAnnouncement } from '../controllers';

const classRouter = Router();

classRouter.get('/:classId/statistics', userAuth, teacherAuth, getStats);
classRouter.get('/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);

export default classRouter;
