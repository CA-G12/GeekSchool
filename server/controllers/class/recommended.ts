import { Request, Response, NextFunction } from 'express';
import { recommendedQueries } from '../../queries';

const recommended = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const data:any = await recommendedQueries(Number(classId));
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export default recommended;
