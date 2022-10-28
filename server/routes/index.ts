import { Router } from 'express';
import authRouter from './auth';
import classRouter from './class';
import profilesRouter from './profile';

const router = Router();

router.use(authRouter);
router.use('/class', classRouter);
router.use('/profile', profilesRouter);
export default router;
