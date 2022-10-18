import { signup, logout, userData } from '../controllers';
import { userAuth } from '../middlewares';

const authRouter = require('express').Router();

authRouter.post('/auth/signup', signup);
authRouter.post('/auth/logout', logout);
authRouter.get('/auth/', userAuth, userData);

export default authRouter;
