import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../utils';
import getAnnouncementQuery from '../../queries/class';

const getAnnouncement = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const data:any = await getAnnouncementQuery(classId);
    res.json(data);
  } catch (error) {
    next(new CustomError(400, 'Bad Request!'));
  }
};

export default getAnnouncement;
