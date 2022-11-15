import { Request, Response, NextFunction } from 'express';
import { recommendedQueries } from '../../queries';

const recommended = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const { count, rows } = await recommendedQueries(Number(classId));
    res.json({ msg: 'Recommended data for this class', count, rows });
  } catch (error) {
    next(error);
  }
};

export default recommended;
