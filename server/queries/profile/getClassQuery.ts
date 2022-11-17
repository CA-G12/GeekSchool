import { Class } from '../../models';

const getClassQuery = (id: string) => (
  Class.findAll({
    raw: true,
    where: {
      teacher_id: id,
    },
  })
);

export default getClassQuery;
