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

// const init = {
//   userData: {
//     id: 0,
//     name: "",
//     role: "",
//   },
//   setUserData: () => { },
// };

// type Props = { children: ReactNode };

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

      console.log("res: ", res);

      setUserData({
        id: res.data.data.id,
        role: res.data.data.role,
        name: res.data.data.name,
      });
      setLoading(false);

      console.log(userData);
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

        console.log(data);
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

  // const value = useMemo(() => ({ userData, setUserData }), [userData]);

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

// const login = async (
//   email: string,
//   password: string,
//   callback: any = null
// ): Promise<any> => {
//   try {
//     const res = await axios.post('/auth/login', {
//       email,
//       password,
//     });

//     setUser({
//       id: res.data.data.id,
//       role: res.data.role,
//       image: res.data.data.image,
//     });
//     if (callback) callback(null);
//   } catch (err) {
//     if (callback) callback(err);
//   }
// };
