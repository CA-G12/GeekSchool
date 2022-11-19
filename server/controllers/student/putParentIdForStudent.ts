import { Request, Response, NextFunction } from 'express';
import { findUserByEmail, putParentIdForStudentQuery, getUserIdFromTableQuery } from '../../queries';

const putParentIdForStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, parentId } = req.body;
    const studentUser = await findUserByEmail(email);
    const studentId = studentUser?.getDataValue('id');
    const studentData = await getUserIdFromTableQuery('student', studentId);
    const parentData = await getUserIdFromTableQuery('parent', parentId);

    await putParentIdForStudentQuery(studentData?.getDataValue('id'), parentData?.getDataValue('id'));

    res.json({ msg: 'student updated successfully' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default putParentIdForStudent;
