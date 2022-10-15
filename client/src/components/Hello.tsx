import { useUserData } from "../context/AuthContext";

const Hello = () => {
  //   const obj = useUserData();
  const { userData } = useUserData();
  //   console.log(userData);
  //   console.log(obj?.userData);

  return (
    <>
      <div>{userData?.name}</div>
      <br />
      <div>{userData?.body}</div>
    </>
  );
};

export default Hello;
