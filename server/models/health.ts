import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Health = sequelize.define('Health', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dental: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  vision: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  blood_pressure: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  cancer: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  diabetes: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  chronic: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  other: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
}, {
  tableName: 'health',
});

export default Health;
