const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
  },
  parent_id: {
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});
export default Student;
