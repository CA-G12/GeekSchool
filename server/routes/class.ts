import { userAuth } from '../middlewares';
import { recommended } from '../controllers';

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, recommended);

export default classRouter;
