import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Teacher;
