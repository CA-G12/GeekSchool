import { NextFunction, Response } from 'express';
import { addMessageQuery } from '../../queries';

const addMessage = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    const { classId } = req.params;
    const { message } = req.body;
    const sendMessage = await addMessageQuery(id, +classId, message);
    res.send(sendMessage);
  } catch (error) {
    next(error);
  }
};

export default addMessage;
