import {
  TestStudent, Test, Class, ClassStudent, Student, User,
} from '../../models';

const getClassGradesQuery = (classId: string) => TestStudent.findAll(

  {
    raw: true,
    nest: false,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    // where: { class_id: classId },
    include: [
      {
        model: Test,
        where: { class_id: classId },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'id', 'class_id'],
        },
        include: [{
          model: Class,
          // where: { class_id: classId },
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
          include: [{
            model: ClassStudent,
            attributes: {
              exclude: ['updatedAt', 'createdAt', 'id'],
            },
            include: [{
              model: Student,
              attributes: {
                exclude: ['user_id', 'updatedAt', 'createdAt'],
              },
              include: [{
                model: User,
                attributes: {
                  exclude: ['createdAt', 'updatedAt', 'role', 'location', 'email', 'mobile', 'password'],
                },
              }],
            }],
          }],
        }],
      },
    ],

  },
);

export default getClassGradesQuery;
