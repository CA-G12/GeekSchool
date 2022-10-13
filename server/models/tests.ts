import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Classes from './classes';

const Tests = sequelize.define('Test', {
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
    type: DataTypes.DATE,
  },
});

Classes.hasMany(Tests);
Tests.belongsTo(Classes, { foreignKey: 'class_id' });

export default Tests;
