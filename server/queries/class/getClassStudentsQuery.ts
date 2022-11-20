import {
  ClassStudent, Parent, Student, User,
} from '../../models';

Parent.hasMany(Student, { foreignKey: 'parent_id', sourceKey: 'id' });
Student.belongsTo(Parent, { foreignKey: 'parent_id' });

const getClassStudentsQuery = (classId: string) => ClassStudent.findAll(
  {
    raw: true,
    // eslint-disable-next-line max-len
    attributes: ['Student.User.name' as 'name', 'Student.Parent.User.email' as 'email', 'Student.Parent.User.img' as 'img', 'student_id'],
    where: { class_id: classId },
    include: [{
      model: Student,
      attributes: [],
      include: [{
        model: User,
        attributes: [],
      },
      {
        model: Parent,
        attributes: [],
        include: [{
          model: User,
          attributes: ['name'],
        }],
      }],
    }],
  },
);

export default getClassStudentsQuery;
