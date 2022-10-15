import logout from '../controllers';

const authRouter = require('express').Router();

authRouter.get('/auth/logout', logout);

export default authRouter;
