import { Op } from 'sequelize';
import { AssignmentStudent } from '../../models';

const putAssignmentStudentQuery = (
  assignmentId:string,
  isSubmitted:string,
  materialLink:string,
  studentId:string,
) => {
  console.log('query*******', {
    isSubmitted, materialLink, studentId, assignmentId,
  });

  return AssignmentStudent.update({ is_submitted: isSubmitted, material_link: materialLink }, {
    where: {
      [Op.and]: {
        student_id: studentId,
        assignment_id: assignmentId,
      },
      // student_id: studentId,
    },
    returning: ['is_submitted', 'material_link'],
  });
};

export default putAssignmentStudentQuery;
