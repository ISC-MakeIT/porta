import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButon";
import Profile from "./components/Profile";
import Message from "./components/Message";
import FileUploader from "./components/FileUploader";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <LoginButton />
    //     <LogoutButton />
    //     <Profile />
    //     <Message />
    //     <FileUploader />
    //   </header>
    // </div>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            isAuthenticated ? (
              <Header />
            ) :
              (
                <Home />
              )
          } />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
