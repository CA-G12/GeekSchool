interface UserInterface {
  id: number;
  name: string;
  role: string;
}

interface UserDataInterface {
  userData: UserInterface | null;
  setUserData: Function;
}

interface emailInterface {
  email: string;
  index: number;
  // eslint-disable-next-line no-unused-vars
  deleteChildEmail: (index: number) => {};
}

interface userDataParentInterface {
  inputValue: () => {};
  /* eslint-disable no-unused-vars */
  addEmailChildren: (emails: string[]) => {};
}

interface userDataInterface {
  inputValue: () => {};
}

interface signUpDataInterface {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confPassword: string;
  location: string;
  role: string;
  children: string[] | [];
}

export {
  UserInterface,
  UserDataInterface,
  emailInterface,
  userDataParentInterface,
  userDataInterface,
  signUpDataInterface,
};
