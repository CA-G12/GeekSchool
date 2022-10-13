import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('');

const questions = sequelize.define('assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default questions;
