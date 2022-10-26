import { Router } from 'express';

import { userAuth } from '../middlewares';

import { getParentTeachers } from '../controllers';

const parentRouter = Router();

parentRouter.get('/:parentId/teachers', userAuth, getParentTeachers);

export default parentRouter;
