import { Op } from 'sequelize';
import { ClassStudent, Student, User } from '../../models';
import { getClassStudentsQuery } from '../class';

const getAllStudentsQuery = async (classId: string) => {
  const [...students] = await getClassStudentsQuery(classId);
  const studentsId = students.map((student: any) => (student.student_id));

  return ClassStudent.findAll(
    {
      raw: true,
      attributes: ['Student.id' as 'id', 'Student.User.name' as 'name'],
      where: {
        class_id: {
          [Op.ne]: classId,
        },
        student_id: {
          [Op.notIn]: studentsId,
        },
      },
      group: ['Student.id', 'Student.User.name'],

      include: [{
        model: Student,
        attributes: [],
        include: [{
          model: User,
          attributes: [],
        }],
      }],
    },
  );
};
export default getAllStudentsQuery;
