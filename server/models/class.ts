import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Class;