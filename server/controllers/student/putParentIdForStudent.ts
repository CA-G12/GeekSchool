import { Request, Response, NextFunction } from 'express';
import {findUserByEmail, putParentIdForStudentQuery,getUserIdFromTableQuery }from '../../queries';

const putParentIdForStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, parentId } = req.body;
    console.log({ email, parentId });
    
    const studentUser = await findUserByEmail(email);
    const studentId = studentUser?.getDataValue('id');
    
    const parentData = await getUserIdFromTableQuery('parent', parentId);

    await putParentIdForStudentQuery(studentId, parentData?.getDataValue('id'));

    res.json({ msg: 'student updated successfully' });
  } catch (error) {
    console.log('1111111111111111111111111111111');
    console.log(error);
    console.log('1111111111111111111111111111111');

    next(error);
  }
};

export default putParentIdForStudent;
