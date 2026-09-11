import "./styles.css";

export default function start() {
  return (
    <div className="App">
      <div className="Row">
        Username <input type="text" />
        Password <input type="text" />
        <button className="Button" onClick={undefined}>
          Login
        </button>
      </div>
      <div className="Login">User: {username}</div>
      <div className="Login">Password: {password}</div>
    </div>
  );
}
