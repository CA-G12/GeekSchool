import { Request, Response } from 'express';
import recommendedQueries from '../../queries';

const recommended = async (req: Request, res: Response) => {
  const { classId } = req.params;
  res.json(await recommendedQueries(Number(classId)));
};

export default recommended;
