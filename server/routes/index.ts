import { Router } from 'express';
import authRouter from './auth';
import classRouter from './class';
import studentRouter from './student';
import profilesRouter from './profile';

const router = Router();

router.use(authRouter);
router.use('/class', classRouter);
router.use('/student', studentRouter);
router.use('/profile', profilesRouter);

export default router;
