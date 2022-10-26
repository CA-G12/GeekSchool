import { Router } from 'express';
import { putStudentHealth } from '../controllers';

const studentRouter = Router();

studentRouter.put('/:studentId/health', putStudentHealth);

export default studentRouter;
