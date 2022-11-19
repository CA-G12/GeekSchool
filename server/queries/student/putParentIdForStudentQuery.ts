import { Student } from '../../models';

const putParentIdForStudentQuery = (
  studentId: number,
  parentId: number,
) => Student.update({ parent_id: parentId }, {
  where: {
    id: studentId,
  },
});

export default putParentIdForStudentQuery;
