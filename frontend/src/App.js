import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Edit from "./pages/Edit";
import Post from "./pages/Post";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, createContext } from "react";

export const AppearContext = createContext({});

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [appear, setAppear] = useState(false);
  const value = {
    appear,
    setAppear,
  };
  return (
    <div className="App">
      <AppearContext.Provider value={value}>
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
      </AppearContext.Provider>
    </div>
  );
}

export default App;
