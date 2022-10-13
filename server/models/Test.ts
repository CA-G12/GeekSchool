const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('');

const Test = sequelize.define('Test', {
  id: {
    type: DataTypes.INTEGER,
  },
  class_id: {
    type: DataTypes.INTEGER,
  },
  notes: {
    type: DataTypes.STRING(1234),
  },
  title: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.Date,
  },
});
export default Test;
