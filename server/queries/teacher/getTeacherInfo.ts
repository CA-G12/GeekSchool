import { User, Teacher } from '../../models';

const teacherInfoQuery = async (teacherId: number) => Teacher
  .findAll({
    raw: true,
    nest: false,
    attributes: ['Teacher.id', 'User.name' as 'name', 'User.role' as 'role', 'User.location' as 'location', 'User.email' as 'email', 'User.mobile' as 'mobile', 'User.img' as 'img'],
    include: [
      {
        model: User,
        where: { id: teacherId },
        attributes: [],

      },
    ],
  });

export default teacherInfoQuery;
