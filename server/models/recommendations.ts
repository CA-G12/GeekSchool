import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('');

const recommendations = sequelize.define('recommendations', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  material_link: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default recommendations;
