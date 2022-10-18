import { Student } from '../models';

const createStudent = (userId: number, parentId: number) => (
  Student.create({ user_id: userId, parent_id: parentId })
);

export default createStudent;
