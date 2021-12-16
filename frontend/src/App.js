import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButon";
import Profile from "./components/Profile";
import Message from "./components/Message";

function App() {
  return (
    // TODO: react-router-domを追加する
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
        <LogoutButton />
        <Profile />
        <Message />
      </header>
    </div>
  );
}

export default App;
