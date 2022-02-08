import { useState } from "react";

import { getUser, User } from "./api";

export default (): [(id: string) => void, User, string] => {
  const blank: User = { name: "", email: "", age: 0 };
  const [user, setUser] = useState<User>(blank);
  const [errorMsg, setErrorMsg] = useState("");

  const getUserTest = async (id: string) => {
    try {
      const user = await getUser(`/user/${id}`);
      setUser(user);
      setErrorMsg("");
    } catch (error:any) {
      setErrorMsg(error.message);
      setUser(blank);
    }
  };

  return [getUserTest, user, errorMsg];
};
