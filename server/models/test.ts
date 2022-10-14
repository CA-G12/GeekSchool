import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Test = sequelize.define('Test', {
  id: {
    type: DataTypes.INTEGER,
  },
  notes: {
    type: DataTypes.STRING(1234),
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'tests',
});

export default Test;
