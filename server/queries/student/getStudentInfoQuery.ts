import { User } from '../../models';

const getStudentInfoQuery = (studentId: string | number) => User.findAll({
  raw: true,
  nest: false,
  where: {
    id: studentId,
  },
});

export default getStudentInfoQuery;
