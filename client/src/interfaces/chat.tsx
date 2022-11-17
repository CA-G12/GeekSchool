/* eslint-disable camelcase */

interface messageInterface {
  id: number,
  class_id: number,
  sender_id: number,
  message: string,
  updatedAt: string,
  createdAt: string,
}

interface textMessageInterface {
  messageText: string,
  senderId: number,
}


export {
  messageInterface,
  textMessageInterface
}