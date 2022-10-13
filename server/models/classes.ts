import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

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

export default Classes;
