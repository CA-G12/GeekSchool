/* eslint-disable camelcase */

interface messageInterface {
  id: number;
  class_id: number;
  sender_id: number;
  message: string;
  createdAt: string;
  User: {
    img: string;
    name: string;
  };
}

interface textMessageInterface {
  senderId: number;
  userId: number;
  messageText: string;
  img: string;
  date: string;
  name: string;
}

export { messageInterface, textMessageInterface };
