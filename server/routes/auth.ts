import { signup, logout } from '../controllers';

const router = require('express').Router();

router.post('/signup', signup);
router.post('/logout', logout);

export default router;
