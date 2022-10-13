const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('');

const Report = sequelize.define('Report', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
  },
  student_id: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING(1234),
  },
});
export default Report;
