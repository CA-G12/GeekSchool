import Announcement from './announcement';
import Assignment from './assignment';
import AssignmentStudent from './assignmentStudent';
import Class from './class';
import ClassStudent from './classStudent';
import Feedbacks from './feedback';
import Health from './health';
import Parent from './parent';
import Question from './question';
import Recommendation from './recommendation';
import Report from './report';
import Schedule from './schedule';
import Student from './student';
import Teacher from './teacher';
import Test from './test';
import TestStudent from './testStudent';
import User from './user';

// Relations

// *** Announcement ***
Class.hasMany(Announcement);
Announcement.belongsTo(Class, { foreignKey: 'class_id' });

// *** Assignment ***
Class.hasMany(Assignment);
Assignment.belongsTo(Class, { foreignKey: 'class_id' });

// *** AssignmentStudent ***
Assignment.hasMany(AssignmentStudent);
AssignmentStudent.belongsTo(Assignment, { foreignKey: 'assignment_id' });

// *** Class ***
Teacher.hasMany(Class);
Class.belongsTo(Teacher, { foreignKey: 'teacher_id' });

Student.hasMany(AssignmentStudent);
AssignmentStudent.belongsTo(Student, { foreignKey: 'student_id' });

// *** ClassStudent ***

Class.hasMany(ClassStudent);
ClassStudent.belongsTo(Class, { foreignKey: 'class_id' });

Student.hasMany(ClassStudent);
ClassStudent.belongsTo(Student, { foreignKey: 'student_id' });

// *** FeedBack ***
Student.hasMany(Feedbacks);
Feedbacks.belongsTo(Student, { foreignKey: 'student_id' });

Class.hasMany(Feedbacks);
Feedbacks.belongsTo(Class, { foreignKey: 'class_id' });

// *** Health ***
Student.hasOne(Health);
Health.belongsTo(Student, { foreignKey: 'student_id' });

// *** Parent ***
Parent.hasOne(User);
User.belongsTo(Parent, { foreignKey: 'user_id' });

// *** Question ***
Class.hasMany(Question);
Question.belongsTo(Class, { foreignKey: 'class_id' });

// *** Recommendation ***
Class.hasMany(Recommendation);
Recommendation.belongsTo(Class, { foreignKey: 'class_id' });

// *** Report ***
Class.hasMany(Report);
Report.belongsTo(Class, { foreignKey: 'class_id' });

Student.hasMany(Report);
Report.belongsTo(Class, { foreignKey: 'student_id' });

// *** Schedule ***
Class.hasMany(Schedule);
Schedule.belongsTo(Class, { foreignKey: 'class_id' });

// *** Student ***
User.hasOne(Student);
Student.belongsTo(User, { foreignKey: 'user_id' });

Parent.hasMany(Student);
Student.belongsTo(Parent, { foreignKey: 'parent_id' });

// *** Teacher ***
User.hasOne(Teacher);
Teacher.belongsTo(User, { foreignKey: 'user_id' });

// *** Test ***
Class.hasMany(Test);
Test.belongsTo(Class, { foreignKey: 'class_id' });

// *** TestStudent ***
Test.hasMany(TestStudent);
TestStudent.belongsTo(Test, { foreignKey: 'test_id' });

Student.hasMany(TestStudent);
TestStudent.belongsTo(Student, { foreignKey: 'student_id' });
export {
  Announcement,
  Assignment,
  AssignmentStudent,
  Class,
  ClassStudent,
  Feedbacks,
  Health,
  Parent,
  Question,
  Recommendation,
  Report,
  Schedule,
  Student,
  Teacher,
  Test,
  TestStudent,
  User,
};
