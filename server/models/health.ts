import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('');

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

export default Health;
