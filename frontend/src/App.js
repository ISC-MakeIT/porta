import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Edit from "./pages/Edit";
import Post from "./pages/Post";
import Create from "./pages/Create";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, createContext } from "react";

export const AppearContext = createContext({});
export const ProfileContext = createContext({});
export const PostsContext = createContext({});

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [appear, setAppear] = useState(false);
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([{}]);

  // useEffect(() => {
  //   fetch(`http://localhost:3010/user/${params.user_id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       profileRef.current = json;
  //     })
  //     .catch((err) => console.log(err));
  //   fetch(`http://localhost:3010/posts/${params.user_id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       postsRef.current = json;
  //     });
  // }, [params.user_id]);

  const appearValue = {
    appear,
    setAppear,
  };
  const profileValue = {
    profile,
    setProfile,
  };
  const postsValue = {
    posts,
    setPosts,
  };

  return (
    <div className="App">

      <AppearContext.Provider value={appearValue}>
      <ProfileContext.Provider value={profileValue}>
        <PostsContext.Provider value={postsValue}>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to={`user/${user.sub}`} />
                ) : (
                  <Home />
                )
              }
            />
            <Route path="user/:user_id" element={<User />} />
            <Route
              path="edit/:user_id"
              element={isAuthenticated ? <Edit /> : <Navigate to={`/`} />}
            />
            <Route
              path="create/:user_id"
              element={isAuthenticated ? <Create /> : <Navigate to={`/`} />}
            />
            <Route path="post/:id" element={<Post />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </PostsContext.Provider>
      </ProfileContext.Provider>
      </AppearContext.Provider>
    </div>
  );
}

export default App;
