import { Response, NextFunction } from 'express';

import { postClassQuery, getUserIdFromTableQuery } from '../../queries';

const addNewClass = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const { name } = req.body;
    const teacherId = await getUserIdFromTableQuery(role, id);
    const data: any = await postClassQuery((teacherId?.getDataValue('id')), String(name));
    res.json({ msg: 'new class', data });
  } catch (error) {
    next(error);
  }
};

export default addNewClass;
