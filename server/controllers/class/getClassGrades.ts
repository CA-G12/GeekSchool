import { NextFunction, Request, Response } from 'express';
import { getClassGradesQuery, getActivitiesQuery } from '../../queries';

const getClassGrades = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    console.log(classId);

    const data = await getClassGradesQuery(classId);

    const activities = await getActivitiesQuery(classId);
    console.log(activities);
    console.log({
      data: data.length,
      activities: activities.length,
    });

    res.status(200).json({ msg: 'success', activities });
  } catch (error) {
    next(error);
  }
};

export default getClassGrades;
