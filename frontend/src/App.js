import "./App.css";
import LoginButton from "./components/LoginButton";
import styles from "./conveyor.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import User from "./pages/User";
import { useAuth0 } from '@auth0/auth0-react';
import IconPORTA from "./IconPORTA.png";

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
                <>
                <div id={styles.img}>
                    <img src = {IconPORTA} width={710} height={171} alt="PORTA" />
                </div>
                <div id={styles.progress}>
                    <LoginButton />
                </div>
                </>
              )
          } />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
