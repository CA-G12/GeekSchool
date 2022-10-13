import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Students from './students';

const Health = sequelize.define('health', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dental: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  vision: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  blood_pressure: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cancer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  diabetes: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  chronic: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  other: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Students.hasOne(Health);
Health.belongsTo(Students, { foreignKey: 'student_id' });

export default Health;
