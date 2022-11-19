import { Chat, User } from '../../models';

const getAllMessageQuery = (classId: number) => Chat.findAll({
  attributes: ['id', 'sender_id', 'message', 'class_id', 'createdAt'],
  where: {
    class_id: classId,
  },
  include: {
    model: User,
    attributes: ['name', 'img'],
  },
});

export default getAllMessageQuery;
