import { Router } from 'express';
import authRouter from './auth';
import classRouter from './class';
import parentRouter from './parent';

const router = Router();

router.use(authRouter);
router.use('/class', classRouter);
router.use('/parent', parentRouter);

export default router;
