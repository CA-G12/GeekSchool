interface UserInterface {
  id: number;
  name: string;
  role: string;
}

interface UserDataInterface {
  userData: UserInterface | null;
  setUserData: Function;
}

export { UserInterface, UserDataInterface };
