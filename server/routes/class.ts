import { Router } from 'express';
import getStats from '../controllers/class/getStats';

const classRouter = Router();

classRouter.get('/:classId/statistics', getStats);

export default classRouter;
