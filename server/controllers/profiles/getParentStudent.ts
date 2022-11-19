import { Response, NextFunction } from 'express';
import { getParentStudentQuery, getUserIdFromTableQuery } from '../../queries';

const getParentStudent = async (req:any, res:Response, next:NextFunction) => {
  try {
    const { id } = req.user;
    const parent = await getUserIdFromTableQuery('parent', id);

    const data = await getParentStudentQuery(parent?.getDataValue('id'));
    res.json({ msg: 'getting all student successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getParentStudent;
