import { Response, NextFunction } from 'express';
import { getStudentTestsQuery } from '../../queries';

const getStudentTests = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;
    console.log(id);
    const data:any = await getStudentTestsQuery(id);
    res.json({ msg: 'The student tests', data });
  } catch (error) {
    next(error);
  }
};
export default getStudentTests;
