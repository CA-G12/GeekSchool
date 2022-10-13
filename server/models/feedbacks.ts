import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Students from './students';
import Classes from './classes';

const Feedbacks = sequelize.define('assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Students.hasMany(Feedbacks);
Feedbacks.belongsTo(Students, { foreignKey: 'student_id' });

Classes.hasMany(Feedbacks);
Feedbacks.belongsTo(Classes, { foreignKey: 'class_id' });

export default Feedbacks;
