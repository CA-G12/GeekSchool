import { Feedback } from '../../models';

const addNewFeedbackQuery = (studentId: string, classId: string, feedback: string) => (
  Feedback.create(
    { feedback, class_id: classId, student_id: studentId },
  ));

export default addNewFeedbackQuery;
