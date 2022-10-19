import { Request, Response, NextFunction } from 'express';
// import getAnnouncementQuery from '../../queries/class';

const getAllStudentWhoSubmitTasks = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { classId, assignmentId } = req.params;
    console.log(classId, assignmentId);

    // const data:any = await getAnnouncementQuery(classId);
    console.log('mmmmmmmmmmmmmmmmmmmmmmm');

    res.json({ });
  } catch (error) {
    next(error);
  }
};

export default getAllStudentWhoSubmitTasks;
