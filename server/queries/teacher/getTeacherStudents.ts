import { Op } from 'sequelize';
import {
  Class, ClassStudent, Student, User,
} from '../../models';

const getTeacherStudentsQuery = (teacherId: number) => Class.findAll({
  raw: true,
  nest: false,
  attributes: ['teacher_id', 'ClassStudents.student_id', 'ClassStudents.Student.User.img', 'ClassStudents.Student.User.name', 'ClassStudents.Student.User.email'],
  where: {
    teacher_id: teacherId,
  },
  group: ['teacher_id', 'ClassStudents.student_id', 'ClassStudents.Student.User.img', 'ClassStudents.Student.User.name', 'ClassStudents.Student.User.email'],
  include: [{
    model: ClassStudent,
    where: {
      id: {
        [Op.ne]: null,
      },
    },
    attributes: [],
    include: [{
      model: Student,
      attributes: [],
      include: [{
        model: User,
        attributes: [],
      }],
    }],
  }],
});

export default getTeacherStudentsQuery;
