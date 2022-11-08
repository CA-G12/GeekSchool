import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactChild,
  ReactElement,
} from "react";

import axios from "axios";
import { UserInterface, UserDataInterface } from "../../interfaces";


export const UserAuthContext = createContext<UserDataInterface | null>(null);

export const useUserData = (): any => useContext(UserAuthContext);

export const UserAuthProvider = (): UserDataInterface => {
  const source = axios.CancelToken.source();
  const [userData, setUserData] = useState<UserInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (
    email: string,
    loginPassword: string,
    callback: any = null
  ): Promise<any> => {
    try {
      setLoading(true);
      const res = await axios.post(
        "/api/v1/auth/login",
        {
          email,
          loginPassword,
        },
        { cancelToken: source.token }
      );


      setUserData({
        id: res.data.data.id,
        role: res.data.data.role,
        name: res.data.data.name,
      });
      setLoading(false);
      if (callback) callback(null);
      return { role: res.data.data.role, id: res.data.data.id };
    } catch (err) {
      if (callback) callback(err);
    }
    return true;
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await axios("/api/v1/auth", {
          cancelToken: source.token,
        });
        setLoading(false);
        setUserData(data);
      } catch (err) {
        setLoading(false);
      }
    };
    getUserData();

    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    login,
    setUserData,
    userData,
    loading,
  };
};

interface ProvideAuthProps {
  children: ReactChild;
}

export const ProvideAuth = ({ children }: ProvideAuthProps): ReactElement => {
  const auth = UserAuthProvider();
  if (auth.loading) {
    return <h2>loading ...</h2>;
  }
  return (
    <UserAuthContext.Provider value={auth}>
      {children}{" "}
    </UserAuthContext.Provider>
  );
};
