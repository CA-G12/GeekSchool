import { Response, NextFunction } from 'express';
import { getParentTeachersQuery, getUserIdFromTableQuery } from '../queries';

const getParentTeachers = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id, role } = req.user;
    const parentId = await getUserIdFromTableQuery(role, id);
    const data = await getParentTeachersQuery((parentId?.getDataValue('id')));
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export default getParentTeachers;
