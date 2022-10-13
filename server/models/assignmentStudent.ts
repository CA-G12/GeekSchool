import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Students from './students';
import Assignments from './assignments';

const AssignmentStudent = sequelize.define('assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  assignment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isSubmitted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  material_link: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'class_student',
});

Assignments.hasMany(AssignmentStudent);
AssignmentStudent.belongsTo(Assignments, { foreignKey: 'assignment_id' });

Students.hasMany(AssignmentStudent);
AssignmentStudent.belongsTo(Students, { foreignKey: 'student_id' });

export default AssignmentStudent;
