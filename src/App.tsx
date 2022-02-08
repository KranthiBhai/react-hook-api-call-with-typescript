import * as React from "react";
import "./styles.css";
import useTest from "./hook";

export default function App() {
  const [getUser, user, errorMessage] = useTest();
  return (
    <div className="App">
      <h1>Simple API Hook Demo</h1>
      <button onClick={() => getUser("123")}>Get User</button>
      <div>
        <h5>{user.name}</h5>
        <h6>{user.email}</h6>
        <h6>{user.age}</h6>

        <h6 style={{ color: "red" }}>{errorMessage}</h6>
      </div>
    </div>
  );
}
