import {
  Teacher, Class, ClassStudent, Student, User,
} from '../../models';

const getTeacherStudentsQuery = (teacherId: number) => Teacher.findAll({
  attributes: ['id'],
  where: {
    id: teacherId,
  },
  include: [{
    model: Class,
    attributes: {
      exclude: ['teacher_id', 'createdAt', 'updatedAt'],
    },
    include: [{
      model: ClassStudent,
      attributes: {
        exclude: ['teacher_id', 'class_id', 'createdAt', 'updatedAt'],
      },
      include: [{
        model: Student,
        attributes: {
          exclude: ['class_id', 'createdAt', 'updatedAt'],
        },
        include: [{
          model: User,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        }],
      }],
    }],
  }],
});

export default getTeacherStudentsQuery;
