import { AssignmentStudent, Assignment } from '../../models';

const studentAssignmentQuery = async (studentId : string, classId : string) => AssignmentStudent
  .findAll({
    attributes: ['id', 'isSubmitted', 'material_link',
      'grade', 'assignment_id', 'student_id',
      'Assignment.title' as 'title',
      'Assignment.description' as 'description',
      'Assignment.class_id' as 'class_id'],
    raw: true,
    nest: false,
    where: {
      student_id: studentId,
    },
    include: [{
      model: Assignment,
      as: 'Assignment',
      attributes: [],
      where: { class_id: classId },
    }],

  });

export default studentAssignmentQuery;
