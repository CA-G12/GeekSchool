interface UserInterface {
  id: number;
  role: string;
}

interface UserDataInterface {
  userData: UserInterface | null;
  setUserData: Function;
}

export { UserInterface, UserDataInterface };
