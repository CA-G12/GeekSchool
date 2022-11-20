import { ClassStudent } from '../../models';

const addNewStudentsQuery = (studentIds: number[], classId: string) => {
  studentIds.map((studentId: number) => (ClassStudent.create(
    { class_id: classId, student_id: studentId },
  )));
};

export default addNewStudentsQuery;
