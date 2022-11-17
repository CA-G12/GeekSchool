import { Chat } from '../../models';

const getAllMessageQuery = (classId: number) => Chat.findAll({
  where: {
    class_id: classId,
  },
});

export default getAllMessageQuery;
