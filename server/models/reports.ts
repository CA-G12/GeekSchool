import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Classes from './classes';
import Students from './students';

const Reports = sequelize.define('Report', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
  },
  student_id: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING(1234),
  },
});

Classes.hasMany(Reports);
Reports.belongsTo(Classes, { foreignKey: 'class_id' });

Students.hasMany(Reports);
Reports.belongsTo(Classes, { foreignKey: 'student_id' });

export default Reports;
