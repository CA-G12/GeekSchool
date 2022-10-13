import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Users from './users';

const Parents = sequelize.define('Parent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Parents.hasOne(Users);
Users.belongsTo(Parents, { foreignKey: 'user_id' });

export default Parents;
