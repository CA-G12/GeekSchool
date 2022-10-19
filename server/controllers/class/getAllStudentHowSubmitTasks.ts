import { Request, Response, NextFunction } from 'express';
import { getAllStudentWhoSubmitTasksQuery } from '../../queries/class';

const getAllStudentWhoSubmitTasks = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const data:any = await getAllStudentWhoSubmitTasksQuery(assignmentId);
    res.json({ msg: 'getting all student successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getAllStudentWhoSubmitTasks;
