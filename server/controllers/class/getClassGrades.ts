import { NextFunction, Request, Response } from 'express';
// import { getClassStudentsQuery } from '../../queries';

const getClassGrades = async (req: Request, res: Response, next: NextFunction) => {
  console.log(1111);

  try {
    const { classId } = req.params;
    console.log(classId);

    // const data = await getClassStudentsQuery(classId);
    // res.json({ msg: 'success', data });
    res.send({ msg: 'run successfully' });
  } catch (error) {
    next(error);
  }
};

export default getClassGrades;
