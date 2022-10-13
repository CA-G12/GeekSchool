import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('');

const teacher = sequelize.define('teacher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

export default teacher;
