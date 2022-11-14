import { Request, Response, NextFunction } from 'express';
import { getClassQuery, getTeacherClassesQuery } from '../../queries';

const getTeachersClasses = async (req:Request, res:Response, next:NextFunction) => {
  try {
    
    const { teacherId } = req.params;
    const userData: any = await getTeacherClassesQuery(teacherId);
    const {id} = userData[0];
    
    const data = await getClassQuery(id);
    
    res.json({ msg: 'getting all classes successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getTeachersClasses;
