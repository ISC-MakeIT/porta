import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Edit from "./pages/Edit";
import { useAuth0 } from "@auth0/auth0-react";

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
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="user/1" /> : <Home />}
        />
        <Route path="user/:user_id" element={<User />} />
        <Route path="edit/:user_id" element={<Edit />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
