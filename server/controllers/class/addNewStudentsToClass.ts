import { Request, Response, NextFunction } from 'express';

import { addNewStudentsQuery } from '../../queries/class';

const addNewStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;

    const { students } = req.body;

    const data:any = await addNewStudentsQuery(students, classId);
    res.status(201).json({ msg: 'students added successfully!', data });
  } catch (err) {
    next(err);
  }
};

export default addNewStudents;
