import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

export default Student;
