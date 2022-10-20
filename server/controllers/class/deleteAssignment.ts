import { Response, NextFunction } from 'express';
import { deleteAssignmentQuery } from '../../queries';
import { CustomRequest, CustomError } from '../../utils';

const deleteAssignment = async (req: CustomRequest, res: Response, next:NextFunction) => {
  try {
    const { user } = req;
    const { assignmentId } = req.params;
    if (user.role === 'student') {
      next(new CustomError(401, 'Unauthenticated'));
    } else {
      const data:any = await deleteAssignmentQuery(Number(assignmentId));
      res.json({ msg: 'Assignment deleted successfully', data });
    }
  } catch (error) {
    next(error);
  }
};

export default deleteAssignment;
