import { logout } from '../controllers';

const authRouter = require('express').Router();

authRouter.post('/auth/logout', logout);

export default authRouter;
