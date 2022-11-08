import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactChild,
  ReactElement,
} from "react";
import axios from "axios";
import {
  signUpDataInterface,
  UserInterface,
  UserDataInterface,
} from "../../interfaces";

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

      setUserData({
        id: res.data.data.id,
        role: res.data.data.role,
        name: res.data.data.name,
      });
      setLoading(false);
      if (callback) callback(null);
    } catch (err) {
      setLoading(false);
      return { error: err };
    }

    return true;
  };

  const signup = async (
    data: signUpDataInterface,
    callback: any = null
  ): Promise<any> => {
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/auth/signup", data);
      setUserData({
        id: res.data.data.id,
        role: res.data.data.role,
        name: res.data.data.name,
      });
      setLoading(false);
      if (callback) callback(null);
    } catch (err) {
      setLoading(false);
      return { error: err };
    }

    return true;
  };

  const logout = async (callback: any = null): Promise<any> => {
    try {
      setLoading(true);
      await axios.post("/api/v1/auth/logout");
      setUserData({
        id: 0,
        role: "",
        name: "",
      });
      setLoading(false);
      if (callback) callback(null);
    } catch (err) {
      setLoading(false);
      return { error: err };
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
    signup,
    setUserData,
    userData,
    loading,
    logout,
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
