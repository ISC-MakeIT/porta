import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
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
                <Home />
              )
          } />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
