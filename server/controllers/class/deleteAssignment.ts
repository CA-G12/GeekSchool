import { Response, NextFunction } from 'express';
import { deleteAssignmentQuery } from '../../queries';
import { CustomRequest, CustomError } from '../../utils';

const deleteAssignment = async (req: CustomRequest, res: Response, next:NextFunction) => {
  try {
    const { user } = req;
    const { id } = req.params;
    if (user.role === 'student') {
      next(new CustomError(401, 'Unauthenticated'));
    } else {
      await deleteAssignmentQuery(Number(id));
      res.json({ msg: 'Assignment deleted successfully' });
    }
  } catch (error) {
    next(error);
  }
};

export default deleteAssignment;
