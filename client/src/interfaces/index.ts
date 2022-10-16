export interface UserInterface {
  id: number;
  role: string;
}

export interface UserDataInterface {
  userData: UserInterface | null;
  setUserData: Function;
}

export const init = {
  userData: {
    id: 0,
    role: "",
  },
  setUserData: () => {},
};
