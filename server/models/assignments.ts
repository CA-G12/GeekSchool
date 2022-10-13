import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Classes from './classes';

const Assignments = sequelize.define('assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Classes.hasMany(Assignments);
Assignments.belongsTo(Classes, { foreignKey: 'class_id' });

export default Assignments;
