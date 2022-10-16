import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
  },
});

export default Student;
