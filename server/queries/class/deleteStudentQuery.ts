import { Op } from 'sequelize';
import { ClassStudent } from '../../models';

const deleteStudentQuery = async (classId: string, studentId: string) => {
  const std = await ClassStudent.findOne({
    where: {
      [Op.and]: {
        student_id: studentId,
        class_id: classId,
      },
    },
  });
  await ClassStudent.destroy({
    where: {
      [Op.and]: {
        student_id: studentId,
        class_id: classId,
      },
    },
  });
  return std;
};

export default deleteStudentQuery;
