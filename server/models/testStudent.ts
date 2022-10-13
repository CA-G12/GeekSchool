import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Tests from './tests';
import Students from './students';

const TestStudent = sequelize.define('test_student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  test_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'test_student',
});

Tests.hasMany(TestStudent);
TestStudent.belongsTo(Tests, { foreignKey: 'test_id' });

Students.hasMany(TestStudent);
TestStudent.belongsTo(Students, { foreignKey: 'student_id' });

export default TestStudent;
