import { Request, Response, NextFunction } from 'express';
import { addNewFeedbackQuery } from '../../queries';
import { CustomError } from '../../utils';

const addNewFeedback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.studentId) {
      throw new CustomError(400, 'The data needed is not given!');
    }

    if (!req.body.feedback) {
      throw new CustomError(400, 'The data needed is not given!');
    }

    const { classId } = req.params;
    const { studentId, feedback } = req.body;

    const addedFeedback = await addNewFeedbackQuery(studentId, classId, feedback);

    if (!addedFeedback) throw new CustomError(500, 'Error occurred while adding new feedback!');

    res.status(201).json({ msg: 'The feedback is added successfully!', data: addedFeedback });
  } catch (err) {
    if (err.name === 'ValidationError') next(new CustomError(400, 'Wrong data is inserted.'));
    else next(err);
  }
};

export default addNewFeedback;
