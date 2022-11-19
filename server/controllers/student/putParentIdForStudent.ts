import { Request, Response, NextFunction } from 'express';
import {findUserByEmail, putParentIdForStudentQuery }from '../../queries';

const putParentIdForStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, parentId } = req.body;
    console.log({ email, parentId });
    
    const studentUser = await findUserByEmail(email);
    const studentId = studentUser?.getDataValue('id');
    await putParentIdForStudentQuery(studentId, parentId);

    res.json({ msg: 'student updated successfully' });
  } catch (error) {
    console.log(error);
    
    next(error);
  }
};

export default putParentIdForStudent;
