import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default Student;
