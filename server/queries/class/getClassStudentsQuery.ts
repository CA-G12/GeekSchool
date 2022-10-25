import {
  ClassStudent, Parent, Student, User,
} from '../../models';

const getClassStudentsQuery = (classId: string) => ClassStudent.findAll(
  {
    raw: true,
    attributes: ['Student.User.name' as 'name', 'Student.User.mobile' as 'MobileNum', 'Student.Parent.User.img' as 'img'],
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
