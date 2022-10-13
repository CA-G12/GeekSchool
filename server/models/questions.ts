import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Classes from './classes';

const Questions = sequelize.define('assignment', {
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

Classes.hasMany(Questions);
Questions.belongsTo(Classes, { foreignKey: 'class_id' });

export default Questions;
