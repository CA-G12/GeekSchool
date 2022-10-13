import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Parents = sequelize.define('Parent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Parents;
