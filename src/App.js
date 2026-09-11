import { useState } from "react";
import "./styles.css";

export default function App() {
  //  const [username, setUsername] = useState("");
  //  const [password, setPassword] = useState("");
  // Neu:
  const [user, setUser] = useState({ username: "", password: "" });
  console.log(user);

  return (
    <div id="app">
      <header>Übung WID 4 - Object State (Lösung)</header>
      <h2>Login</h2>
      <div id="loginContainer">
        <label for="username">Username or email address </label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          className="Button"
          onClick={() => {
            alert(`User ${user.username} with password ${user.password}`);
            // Löscht die Eingaben aus den Feldern:
            setUser({ username: "", password: "" });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
