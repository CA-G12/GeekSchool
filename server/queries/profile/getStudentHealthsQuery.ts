import { Health } from '../../models';

const getStudentHealthsQuery = (studentId: number) => (
  Health.findAll({
    where: {
      student_id: studentId,
    },
  })
);

export default getStudentHealthsQuery;
