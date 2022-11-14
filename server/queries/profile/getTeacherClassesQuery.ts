import { Class, Teacher } from '../../models';

const getTeacherClassesQuery = (teacherId: string) => (
  Teacher.findAll({
    raw: true,
    where: {
      user_id: teacherId,
    },
  })
);

export default getTeacherClassesQuery;
