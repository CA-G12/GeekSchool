import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  ReactNode,
  FC,
} from "react";

import axios from "axios";
import { UserInterface, UserDataInterface } from "../../interfaces";

const init = {
  userData: {
    id: 0,
    name: "",
    role: "",
  },
  setUserData: () => {},
};

type Props = { children: ReactNode };

export const UserAuthContext = createContext<UserDataInterface>(init);

export const UserAuthProvider: FC<Props> = ({ children }) => {
  const source = axios.CancelToken.source();
  const [userData, setUserData] = useState<UserInterface | null>(null);

  useEffect(() => {
    const getUserData = async () => {
<<<<<<< Updated upstream
      const { data } = await axios("/api/v1/auth", {
=======
      const { data } = await axios("/api/v1//auth", {
>>>>>>> Stashed changes
        cancelToken: source.token,
      });

      setUserData(data);
    };
    getUserData();

    return () => {
      source.cancel();
    };
  }, [source]);

  const value = useMemo(() => ({ userData, setUserData }), [userData]);

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserData = () => useContext(UserAuthContext);
