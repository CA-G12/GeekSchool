import {
  TestStudent, Test, Class,
} from '../../models';

const studentGradesQuery = (studentId: number) => TestStudent
  .findAll({
    raw: true,
    nest: false,
    where: { student_id: studentId },
    attributes: ['TestStudent.id', 'Test.title', 'grade', 'Test.class_id'],
    include: [{
      model: Test,
      as: 'Test',
      attributes: [],
      include: [{
        model: Class,
        as: 'Class',
        attributes: [],
      }],
    },

    ],

  });

export default studentGradesQuery;

// Student
//   .findAll({
//     raw: true,
//     nest: false,
//     where: { id: 1 },
//     include: [{
//       model: TestStudent,

//       include: [{
//         model: Test,

//         include: [{
//           model: Class,

//         }],
//       }],
//     }],
//   });

// ClassStudent
//   .findAll({
//     raw: true,
//     nest: false,
//     attributes: ['Class.Tests.title', 'Class.Tests.TestStudents.grade', 'Class.id'],
//     where: { student_id: 1 },
//     include: [{
//       model: Class,
//       attributes: [],
//       include: [{
//         model: Test,
//         attributes: [],
//         // attributes: ['class_id', 'title', 'id'],
//         include: [{
//           model: TestStudent,
//           where: { student_id: 1 },
//           attributes: [],
//         //   attributes: ['grade', 'test_id', 'student_id'],
//         }],
//       }],
//     }],
//   });
