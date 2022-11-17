import { Student } from '../../models';

const putParentIdForStudentQuery = (
  studentId: number,
  parentId: number,
) => Student.update({ parent_id: parentId }, {
  where: {
    user_id: studentId,
  },
});

export default putParentIdForStudentQuery;
