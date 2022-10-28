import {
  Class, ClassStudent, Student, User,
} from '../../models';

const getTeacherStudentsQuery = (teacherId: number) => Class.findAll({
  attributes: ['teacher_id', 'createdAt', 'updatedAt'],
  where: {
    teacher_id: teacherId,
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
});

export default getTeacherStudentsQuery;
