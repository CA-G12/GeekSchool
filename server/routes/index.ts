import { Router } from 'express';
import authRouter from './auth';
import classRouter from './class';
import studentRouter from './student';

const router = Router();

router.use(authRouter);
router.use('/class', classRouter);
router.use('/student', studentRouter);

export default router;
