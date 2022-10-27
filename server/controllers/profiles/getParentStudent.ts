import { Request, Response, NextFunction } from 'express';
import { getParentStudentQuery } from '../../queries';

const getParentStudent = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { parentId } = req.params;
    const data = await getParentStudentQuery(parentId);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

export default getParentStudent;
