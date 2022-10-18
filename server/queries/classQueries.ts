import { QueryTypes } from 'sequelize';
import sequelize from '../database/connection';

const submittedAndNotSubmittedNum = (classId: string, isSubmitted: boolean) => (
  sequelize.query(
    `
      SELECT
        COUNT(s.id)
      FROM
        "Classes" AS c
      INNER JOIN
        "ClassStudents" AS cs
      ON
        c.id = cs.class_id
      INNER JOIN
        "Students" AS s
      ON
        cs.student_id = s.id
      INNER JOIN
        "AssignmentStudents" AS ast
      ON
        s.id = ast.student_id
      WHERE
        c.id = :id
      AND
        ast.is_submitted = :bool;
    `,
    {
      replacements: { id: classId, bool: isSubmitted },
      type: QueryTypes.SELECT,
    },
  ));

export default submittedAndNotSubmittedNum;
