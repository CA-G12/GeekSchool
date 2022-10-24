import {
  TestStudent, Test, Student, User, Assignment, AssignmentStudent, ClassStudent,
} from '../../models';

const getClassGradesQuery = (classId: string) => ClassStudent.findAll({
  where: {
    class_id: classId,
  },
  attributes: ['id'],
  include: [{
    model: Student,
    attributes: ['id'],
    include: [
      {
        model: TestStudent,
        attributes: ['grade', 'student_id'],
        include: [{
          model: Test,
          attributes: ['title', 'class_id'],
          where: {
            class_id: classId,
          },
        }],
      },
      {
        model: AssignmentStudent,
        attributes: ['grade'],
        include: [{
          model: Assignment,
          attributes: ['title', 'class_id'],
          where: {
            class_id: classId,
          },
        }],
      },
      {
        model: User,
        attributes: ['name', 'img'],
      },
    ],
  }],
});

// const getClassGradesQuery = (classId: string) => Test.findAll({

//   include: [
//     {
//       model: TestStudent,
//       include: [{
//         model: Student,
//         include: [{ model: User },
//           { model: AssignmentStudent, include: [{ model: Assignment }] },
//         ],
//       }],
//     }],
//   where: {
//     class_id: classId,
//   },
// });

// Test.findAll({
//   raw: true,
//   nest: false,
//   where: { class_id: classId },
//   group: ['Test.id',
// 'TestStudents.Student.User.img', 'TestStudents.test_id',
//  'TestStudents.student_id', 'TestStudents.Student.User.name'],
//   attributes: ['TestStudents.grade' as 'grade', 'TestStudents.Student.User.img'
//  as 'img', 'TestStudents.test_id' as 'testId', 'TestStudents.student_id' as 'studentId'
// , 'TestStudents.Student.User.name' as 'studentName'],
//   include: [{
//     // attributes: [],
//     model: TestStudent,
//     include: [{
//       // attributes: [],
//       model: Student,
//       include: [{
//         // attributes: [],
//         model: User,
//       }],
//     }],
//   }],
// });

export default getClassGradesQuery;

// // group: 'student_id',
// raw: true,
// nest: false,
// attributes: { exclude: ['createdAt', 'updatedAt'] },
// // where: { class_id: classId },
// // group: ['student_id'],
// include: [
//   {
//     model: Test,
//     where: { class_id: classId },
//     attributes: {
//       exclude: ['createdAt', 'updatedAt', 'id', 'class_id'],
//     },
//     include: [{
//       model: Class,
//       // where: { class_id: classId },
//       attributes: {
//         exclude: ['createdAt', 'updatedAt'],
//       },
//       include: [{
//         model: ClassStudent,
//         attributes: {
//           exclude: ['updatedAt', 'createdAt', 'id'],
//         },
//         include: [{
//           model: Student,
//           attributes: {
//             exclude: ['user_id', 'updatedAt', 'createdAt'],
//           },
//           include: [{
//             model: User,
//             attributes: {
//               exclude: ['createdAt', 'updatedAt', 'role', 'location', 'email',
//  'mobile', 'password'],
//             },
//           }],
//         }],
//       }],
//     }],
//   },
// ],

// start with Class

// {
//   attributes: ['teacher_id'],
//   include: [{
//     attributes: ['title', 'date'],
//     model: Test,
//     where: { class_id: classId },
//     include: [{
//       attributes: ['grade', 'student_id'],
//       model: TestStudent,
//       include: [{
//         attributes: ['id'],
//         model: Student,
//         include: [{
//           attributes: ['name', 'img'],
//           model: User,
//         }],
//       }],
//     }],
//   }],
// }
