import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Users from './users';

const Teachers = sequelize.define('teacher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

Users.hasOne(Teachers);
Teachers.belongsTo(Users, { foreignKey: 'user_id' });

export default Teachers;
