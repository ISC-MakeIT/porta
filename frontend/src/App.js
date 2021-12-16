import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButon";
import Profile from "./components/Profile";
import Message from "./components/Message";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import User from "./pages/User"
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            isAuthenticated ? (
              <User />
            ) :
              (
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <LoginButton />
                  <Profile />
                  <Message />
                </header>
              )
          } />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
