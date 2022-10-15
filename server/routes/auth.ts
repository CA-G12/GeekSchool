import logout from '../controllers';

const authRouter = require('express').Router();

authRouter.get('/logout', logout);

export default authRouter;
