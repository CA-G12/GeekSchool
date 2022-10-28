import { Router } from 'express';

import { userAuth, parentAuth } from '../middlewares';
import getParentInfo from '../controllers/parent';

const parentRouter = Router();

parentRouter.get('/info', userAuth, parentAuth, getParentInfo);

export default parentRouter;
