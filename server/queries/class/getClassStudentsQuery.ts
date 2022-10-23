import {
  ClassStudent, Parent, Student, User,
} from '../../models';

const getClassStudentsQuery = (classId: string) => ClassStudent.findAll(
  {
    raw: true,
    nest: false,
    attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'class_id'] },
    where: { class_id: classId },
    include: [{
      model: Student,
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt', 'user_id', 'parent_id', 'User.id'],
      },
      include: [{
        model: User,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password'],
        },
      },
      {
        model: Parent,
        include: [{
          model: User,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password'],
          },
        }],
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password', 'user_id'],
        },
      }],
    }],
  },
);

export default getClassStudentsQuery;
