import { Class } from '../../models';

const getClassQuery = (id: string) => (
  Class.findAll({
    raw: true,
    where: {
      id,
    },
  })
);

export default getClassQuery;
