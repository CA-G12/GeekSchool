import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Classes from './classes';

const Recommendations = sequelize.define('recommendations', {
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

Classes.hasMany(Recommendations);
Recommendations.belongsTo(Classes, { foreignKey: 'class_id' });

export default Recommendations;
