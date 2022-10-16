interface UserInterface {
    id: number;
    role: string;
  }
  
interface UserDataInterface {
    userData: UserInterface | null;
    setUserData: Function;
  }
  
const init = {
    userData: {
      id: 0,
      role: "",
    },
    setUserData: () => {},
  };
  

export {
    init
};    export type {
        UserInterface,
        UserDataInterface
    };

