import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Classes from './classes';

const Schedules = sequelize.define('assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  day: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Classes.hasMany(Schedules);
Schedules.belongsTo(Classes, { foreignKey: 'class_id' });

export default Schedules;
