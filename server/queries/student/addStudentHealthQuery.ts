import { Health } from '../../models';

const createStudentHealthQuery = (studentId: number) => Health.create({ student_id: studentId });

export default createStudentHealthQuery;
