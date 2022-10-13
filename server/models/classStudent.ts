import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Classes from './classes';
import Students from './students';

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

Classes.hasMany(ClassStudent);
ClassStudent.belongsTo(Classes, { foreignKey: 'class_id' });

Students.hasMany(ClassStudent);
ClassStudent.belongsTo(Students, { foreignKey: 'student_id' });

export default ClassStudent;
