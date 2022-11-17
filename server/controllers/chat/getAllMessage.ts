import { NextFunction, Response } from 'express';
import { getAllMessageQuery } from '../../queries';

const getAllMessage = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const messages = await getAllMessageQuery(+classId);
    res.send(messages);
  } catch (error) {
    next(error);
  }
};

export default getAllMessage;
