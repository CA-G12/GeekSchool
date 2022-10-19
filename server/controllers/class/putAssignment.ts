import { Request, Response, NextFunction } from 'express';
import { putAssignmentQuery } from '../../queries/class';

const putAssignment = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const { title, description } = req.body;

    const [, data]:any = await putAssignmentQuery(assignmentId, title, description);
    res.status(200).json({ msg: 'updating successfully', data });
  } catch (error) {
    next(error);
  }
};

export default putAssignment;
