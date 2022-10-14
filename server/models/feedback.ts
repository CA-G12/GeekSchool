import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Feedbacks = sequelize.define('Feedbacks', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'feedbacks',
});

export default Feedbacks;
