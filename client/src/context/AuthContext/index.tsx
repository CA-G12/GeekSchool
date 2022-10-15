import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

// interface UserInterface {
//     id: number;
//     name: string;
//     mobile: string;
//     email: string;
//     img: string;
//     location: string;
//     role: string;
//   }

interface UserInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface UserDataInterface {
  userData: UserInterface | null;
  setUserData: Function;
}

const init = {
  userData: {
    postId: 0,
    id: 0,
    name: "",
    email: "",
    body: "",
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
      "https://jsonplaceholder.typicode.com/comments/1"
    );
    const { data } = axiosData;
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserAuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserData = () => useContext(UserAuthContext);
