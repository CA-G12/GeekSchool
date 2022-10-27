import { Router } from 'express';

import { userAuth, parentAuth } from '../middlewares';
import { getParentStudent } from '../controllers';

const profilesRouter = Router();
profilesRouter.get('/parent/:parentId/students', userAuth, parentAuth, getParentStudent);

export default profilesRouter;
