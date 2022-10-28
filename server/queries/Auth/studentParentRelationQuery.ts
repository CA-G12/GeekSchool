import { Student } from '../../models';

const studentParentRelationQuery = (id:string) => Student.findAll({
  raw: true,
  where: {
    parent_id: id,
  },
  attributes: ['user_id', 'parent_id'],
});

export default studentParentRelationQuery;
