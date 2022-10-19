import { Assignment } from '../../models';

const addNewAssignmentQuery = (classId: string, title: string, description: string) => (
  Assignment.create({ title, description, class_id: classId })
);

export default addNewAssignmentQuery;
