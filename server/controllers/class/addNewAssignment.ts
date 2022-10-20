import { Request, Response, NextFunction } from 'express';

import { addNewAssignmentQuery } from '../../queries/class';
import { CustomError, addNewAssignmentValidation } from '../../utils';

const addNewAssignment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addNewAssignmentValidation({
      classId: req.params.classId, title: req.body.title, description: req.body.description,
    });

    const { classId } = req.params;

    const { title, description } = req.body;

    const assignment = await addNewAssignmentQuery(classId, title, description);

    res.status(201).json({ msg: 'Assignment is created successfully!', data: assignment });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new CustomError(400, 'Wrong data is inserted!'));
    }
    next(err);
  }
};

export default addNewAssignment;
