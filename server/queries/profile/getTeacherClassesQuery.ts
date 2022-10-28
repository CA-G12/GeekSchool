import { Class } from '../../models';

const getTeacherClassesQuery = (teacherId: string) => {
  console.log(teacherId);

  return (
    Class.findAll({
      raw: true,
      where: {
        teacher_id: teacherId,
      },
    //   attributes: ['user_id', 'User.name' as'name', 'User.img' as 'img', 'parent_id'],,
    })
  );
};

export default getTeacherClassesQuery;
