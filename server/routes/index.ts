import { Router } from 'express';
import authRouter from './auth';
import classRouter from './class';
import teacherRouter from './teacher';

const router = Router();

router.use(authRouter);
router.use('/class', classRouter);
router.use('/teacher', teacherRouter);

export default router;
