import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Teachers from './teachers';

const Classes = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Teachers.hasMany(Classes);
Classes.belongsTo(Teachers, { foreignKey: 'teacher_id' });

export default Classes;
