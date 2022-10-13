import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Classes from './classes';

const Announcements = sequelize.define('Announcement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Classes.hasMany(Announcements);
Announcements.belongsTo(Classes, { foreignKey: 'class_id' });

export default Announcements;
