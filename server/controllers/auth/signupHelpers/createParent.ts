import {
  createUser, createParent, findUserByEmail, createStudent,
} from '../../../queries';
import { CustomError, UserTableInterface } from '../../../utils';

const createParentAccount = async (user: UserTableInterface, children?: Array<string>) => {
  const parentUser = await createUser(user);
  const parentId = parentUser.getDataValue('id');

  children?.forEach(async (child) => {
    const doesChildStudent = await findUserByEmail(child);
    const childId = doesChildStudent?.getDataValue('id');

    if (!doesChildStudent) {
      throw new CustomError(422, 'The email does not exist!');
    }

    await createStudent(childId, parentId);
    await createParent(parentId);
  });
};

export default createParentAccount;
