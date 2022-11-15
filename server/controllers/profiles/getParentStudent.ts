import { Response, NextFunction } from 'express';
import { getParentStudentQuery, getUserIdFromTableQuery } from '../../queries';

const getParentStudent = async (req:any, res:Response, next:NextFunction) => {
  try {
    const { id, role } = req.user;
    const parentId = await getUserIdFromTableQuery(role, id);
    const data = await getParentStudentQuery((parentId?.getDataValue('id')));
    res.json({ msg: 'getting all student successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getParentStudent;
