import { Test, TestStudent, Class } from '../../models';

const getStudentTestsQuery = (id: number) => TestStudent.findAll({
  where: { student_id: id },
  attributes: ['Test.title', 'Test.id', 'Test.Class.name', 'Test.date'],
  raw: true,
  nest: false,
  include: [{
    model: Test,
    attributes: [],
    include: [{
      model: Class,
      attributes: [],

    }],
  }],

});

export default getStudentTestsQuery;
