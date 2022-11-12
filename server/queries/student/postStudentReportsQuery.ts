import { Report } from '../../models';

const postStudentReportsQuery = (description: string, studentId: number) => {
  Report.create({ description, student_id: studentId });
};

export default postStudentReportsQuery;
