import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Edit from "./pages/Edit";
import Post from "./pages/Post";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to={`user/${user.sub}`} /> : <Home />
          }
        />
        <Route path="user/:user_id" element={<User />} />
        <Route path="edit/:user_id" element={<Edit />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
