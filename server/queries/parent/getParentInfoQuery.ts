import { Parent, User } from '../../models';

const getParentInfoQuery = (parentId: number) => Parent.findAll({
  where: {
    id: parentId,
  },
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
  include: {
    model: User,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  },
});

export default getParentInfoQuery;
