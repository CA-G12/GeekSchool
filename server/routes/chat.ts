import { Router } from 'express';
import { addMessage, getAllMessage } from '../controllers';
import { userAuth } from '../middlewares';

const chatRouter = Router();

chatRouter.post('/:classId/addMessage', userAuth, addMessage);
chatRouter.get('/:classId/messages', userAuth, getAllMessage);

export default chatRouter;
