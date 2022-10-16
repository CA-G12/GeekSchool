import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import axios from 'axios';

interface UserInterface {
    id: number;
    name: string;
    mobile: string;
    email: string;
    img: string;
    location: string;
    role: string;
  }

interface UserDataInterface {
  userData: UserInterface | null;
  setUserData: Function;
}

const init = {
  userData: {
    id: 0,
    name: '',
    mobile: '',
    email: '',
    img: '',
    location: '',
    role: '',
  },
  setUserData: () => {},
};


export const UserAuthContext = createContext<UserDataInterface>(init);

// eslint-disable-next-line react/require-default-props
export const UserAuthProvider = (props: { children?: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserInterface | null>(null);
  const { children } = props;

  const getUserData = async () => {
    const axiosData = await axios(
      'https://jsonplaceholder.typicode.com/comments/1'
    );
    const { data } = axiosData;
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const value = useMemo(() => ({ userData, setUserData }), [userData]);

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserData = () => useContext(UserAuthContext);