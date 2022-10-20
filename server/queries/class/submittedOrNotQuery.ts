import { AssignmentStudent, Assignment, sequelize } from '../../models';

const submittedAndNotSubmittedNum = (classId: string, isSubmitted: boolean) => (
  Assignment.findAll({
    attributes: ['id', 'title', 'class_id'],
    where: {
      class_id: classId,
    },
    include: {
      model: AssignmentStudent,
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('student_id')), 'count'],
      ],
      where: {
        is_submitted: isSubmitted,
      },
    },
    group: ['Assignment.id', 'AssignmentStudents.id'],
  })
);

export default submittedAndNotSubmittedNum;
