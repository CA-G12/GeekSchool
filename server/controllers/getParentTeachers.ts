import { Request, Response, NextFunction } from 'express';
import { getParentTeachersQuery } from '../queries';

const getParentTeachers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { parentId } = req.params;
    const data = await getParentTeachersQuery(parentId);
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export default getParentTeachers;
