import { Request, Response, NextFunction } from 'express';
import { putAssignmentStudentQuery } from '../../queries/class';

const putAssignmentStudent = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const { title, description } = req.body;

    const [, data]:any = await putAssignmentStudentQuery(assignmentId, title, description);
    res.status(200).json({ msg: 'updating successfully', data });
  } catch (error) {
    next(error);
  }
};

export default putAssignmentStudent;
