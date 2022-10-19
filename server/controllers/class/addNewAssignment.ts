import { Request, Response, NextFunction } from 'express';

import { addNewAssignmentQuery } from '../../queries/class';
import CustomError from '../../utils/CustomError';

const addNewAssignment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    if (!req.body.title || !req.body.description) {
      throw new CustomError(400, 'No title or description or both are given!');
    }

    const { title, description } = req.body;

    const assignment = await addNewAssignmentQuery(classId, title, description);

    if (!assignment) throw new CustomError(500, 'Error happen while creating the assignment!');

    res.status(201).json({ message: 'Assignment is created successfully!', data: assignment });
  } catch (err) {
    if (err.name === 'ValidationError') {
      throw new CustomError(400, 'Wrong data is inserted!');
    }
    next(err);
  }
};

export default addNewAssignment;
