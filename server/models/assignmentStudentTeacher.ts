import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('');

const AssignmentStudentTeacher = sequelize.define('assignment', {
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
});

export default AssignmentStudentTeacher;
