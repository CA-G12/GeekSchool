import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const AssignmentStudent = sequelize.define('AssignmentStudent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  isSubmitted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  material_link: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  grade: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'assignment_student_teacher',
});

export default AssignmentStudent;
