import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('');

const Feedback = sequelize.define('assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Feedback;
