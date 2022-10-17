import { logout, userData, login } from '../controllers';
import { userAuth } from '../middlewares';

const authRouter = require('express').Router();

authRouter.post('/auth/logout', logout);
authRouter.get('/auth/', userAuth, userData);
authRouter.post('/login', login);

export default authRouter;
