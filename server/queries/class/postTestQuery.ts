import { Test } from '../../models';

const postTestQuery = async (classId: number, title : string, notes : string, date : Date) => {
  Test.create({
    class_id: classId,
    title,
    notes,
    date,
  });
};

export default postTestQuery;
