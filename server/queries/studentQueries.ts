import { Student } from '../models';

const createStudent = (userId: number) => (
  Student.create({ user_id: userId })
);

export default createStudent;
