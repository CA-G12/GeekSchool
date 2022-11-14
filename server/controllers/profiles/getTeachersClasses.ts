import { Request, Response, NextFunction } from 'express';
import { getClassQuery, getTeacherClassesQuery } from '../../queries';

const getTeachersClasses = async (req:Request, res:Response, next:NextFunction) => {
  try {
    console.log(44444);
    
    const { teacherId } = req.params;
    const userData: any = await getTeacherClassesQuery(teacherId);
    const {id} = userData[0];
    console.log(id);
    
    const data = await getClassQuery(id);
    console.log(data);
    
    res.json({ msg: 'getting all classes successfully', data });
  } catch (error) {
    console.log(5555);
    console.log(error);
    
    next(error);
  }
};

export default getTeachersClasses;
