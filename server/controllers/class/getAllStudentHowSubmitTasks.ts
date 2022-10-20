import { Request, Response, NextFunction } from 'express';
import { getStudentTasksQuery } from '../../queries/class';

const getAllStudentWhoSubmitTasks = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const { isSubmitted } = req.query;

    const data:any = await getStudentTasksQuery(assignmentId, isSubmitted);
    res.json({ msg: 'getting all student successfully', data });
  } catch (error) {
    next(error);
  }
};

export default getAllStudentWhoSubmitTasks;
