import { Request, Response, NextFunction } from 'express';
import { updateAssignmentPayloadValidate } from '../../utils/validation';
import { putAssignmentStudentQuery } from '../../queries/class';

const putAssignmentStudent = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { assignmentId } = req.params;
    const { isSubmitted, materialLink, studentId } = req.body;

    await updateAssignmentPayloadValidate({
      assignmentId, isSubmitted, materialLink, studentId,
    });
    console.log('controller', {
      isSubmitted, materialLink, studentId, assignmentId,
    });

    const [, data]:any = await putAssignmentStudentQuery(
      assignmentId,
      isSubmitted,
      materialLink,
      studentId,
    );
    res.status(201).json({ data, msg: 'updating successfully' });
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};

export default putAssignmentStudent;
