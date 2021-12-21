import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButon";
import Profile from "./components/Profile";
import Message from "./components/Message";
import FileUploader from "./components/FileUploader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
        <LogoutButton />
        <Profile />
        <Message />
        <FileUploader />
      </header>
    </div>
  );
}

export default App;
