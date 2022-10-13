import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Users from './users';
import Parents from './parents';

const Students = sequelize.define('Student', {
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

Users.hasOne(Students);
Students.belongsTo(Users, { foreignKey: 'user_id' });

Parents.hasMany(Students);
Students.belongsTo(Parents, { foreignKey: 'parent_id' });

export default Students;
