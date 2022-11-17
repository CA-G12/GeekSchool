import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Student;
