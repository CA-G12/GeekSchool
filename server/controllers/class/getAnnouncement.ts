import { Request, Response } from 'express';
import getAnnouncementQuery from '../../queries/class';

const getAnnouncement = async (req:Request, res:Response) => {
  const { classId } = req.params;

  const data:any = await getAnnouncementQuery(classId);
  res.json(data);
};

export default getAnnouncement;
