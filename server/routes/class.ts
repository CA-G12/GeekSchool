import { userAuth, studentAndTeacher } from '../middlewares';
<<<<<<< HEAD
import { getAnnouncement, getClassStudents } from '../controllers';
=======
import { recommended, getAnnouncement } from '../controllers';
>>>>>>> f49baae7c478f46c38bf9e35d3d7b85451103043

const classRouter = require('express').Router();

classRouter.get('/class/:classId/recommended', userAuth, studentAndTeacher, recommended);

classRouter.get('/class/:classId/announcement', userAuth, studentAndTeacher, getAnnouncement);
classRouter.get('/class/:classId/students', userAuth, studentAndTeacher, getClassStudents);

export default classRouter;
