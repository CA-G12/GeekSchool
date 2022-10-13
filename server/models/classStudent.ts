import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const ClassStudent = sequelize.define('class_student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'class_student',
});

export default ClassStudent;
