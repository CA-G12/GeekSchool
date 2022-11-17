import { Chat } from '../../models';

const addMessageQuery = (senderId: number, classId: number, message: string) => Chat.create({
  sender_id: senderId,
  class_id: classId,
  message,
});

export default addMessageQuery;
