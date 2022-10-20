import { Assignment } from '../../models';

const putAssignmentTeacherQuery = (
  assignmentId:string,
  title:string,
  description:string,
) => Assignment.update({ title, description }, {
  where: {
    id: assignmentId,
  },
  returning: ['title', 'description'],
});

export default putAssignmentTeacherQuery;
