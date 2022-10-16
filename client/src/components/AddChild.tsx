import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';

interface email {
  email: string,
  index: number,
  // eslint-disable-next-line no-unused-vars
  deleteChildEmail: (index: number) =>{};
}

const AddChild: React.ElementType = ({ email, index, deleteChildEmail }: email) => (
  <div>
    <p>{email}</p>
    <DeleteOutlined onClick={() => deleteChildEmail(index)} />
  </div>
);

export default AddChild;
