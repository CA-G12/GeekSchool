import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  sender_id: {
    type: DataTypes.INTEGER,
  },
  class_id: {
    type: DataTypes.INTEGER,
  },
  message: {
    type: DataTypes.TEXT,
  },
});

export default Chat;
