import { Response, NextFunction } from 'express';
import { deleteAssignmentQuery } from '../../queries';
import { CustomRequest } from '../../utils';

const deleteAssignment = async (req: CustomRequest, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    await deleteAssignmentQuery(Number(id));
    res.json({ msg: 'Assignment deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export default deleteAssignment;
