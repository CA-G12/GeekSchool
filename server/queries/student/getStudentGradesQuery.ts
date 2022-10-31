import {
  TestStudent, Test, Class, ClassStudent, Assignment, AssignmentStudent,
} from '../../models';

const studentGradesQuery = (id: number) => ClassStudent
  .findAll({
    attributes: ['class_id', 'id'],
    where: { student_id: id },
    include: [{
      model: Class,
      attributes: ['id', 'name'],
      include: [{
        model: Test,
        // attributes: [],
        attributes: ['title', 'id'],
        include: [{
          model: TestStudent,
          where: { student_id: id },
          // attributes: [],
          attributes: ['grade', 'id'],
        }],
      },
      {
        model: Assignment,
        // attributes: [],
        attributes: ['title', 'id'],
        include: [{
          model: AssignmentStudent,
          where: { student_id: id },
          // attributes: [],
          attributes: ['id', 'grade'],
        }],
      },
      ],
    }],
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

// TestStudent
//   .findAll({
//     raw: true,
//     nest: false,
//     where: { student_id: id },
//     attributes: ['Test.title', 'grade', 'Test.class_id', 'Test.Class.name'],
//     include: [{
//       model: Test,
//       as: 'Test',
//       attributes: [],
//       include: [{
//         model: Class,
//         as: 'Class',
//         attributes: [],
//       }],
//     },

//     ],

//   });
