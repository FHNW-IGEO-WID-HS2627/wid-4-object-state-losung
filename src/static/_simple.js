import { useState } from "react";
import "./styles.css";

export default function simple() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="Row">
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        Password
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="Button"
          onClick={() => alert(`${username} with ${password}`)}
        >
          Login
        </button>
      </div>
      <div className="Login">User: {username}</div>
      <div className="Login">Password: {password}</div>
    </div>
  );
}
