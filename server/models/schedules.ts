import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('');

const Schedules = sequelize.define('assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  day: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Schedules;
