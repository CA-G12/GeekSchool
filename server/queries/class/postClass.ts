import { Class } from '../../models';

const postClassQuery = (teacherId : number, name: string) => Class.create({
  teacher_id: teacherId,
  name,

});

export default postClassQuery;
