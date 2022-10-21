import { NextFunction, Response } from 'express';
import { addAnnouncementQuery } from '../../queries';
import { CustomError, CustomRequest, addAnnouncementValidate } from '../../utils';

const addAnnouncement = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const { classId } = req.params;
    const { description } = req.body;
    const { role } = req.user;
    if (role !== 'teacher') throw new CustomError(401, 'Unauthenticated');

    await addAnnouncementValidate({ classId, description });

    const isAdd = await addAnnouncementQuery({ classId, description });

    const data = {
      id: isAdd.getDataValue('id'),
      description: isAdd.getDataValue('description'),
      createdAt: isAdd.getDataValue('createdAt'),
    };

    res.json({ msg: 'added announcement successfully', data });
  } catch (error) {
    if (error.name === 'ValidationError') next(new CustomError(400, 'description is required'));
    next(error);
  }
};

export default addAnnouncement;
