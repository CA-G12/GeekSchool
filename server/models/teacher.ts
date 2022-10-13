import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('');

const Teacher = sequelize.define('teacher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

export default Teacher;
