import { Link } from "react-router-dom";
import styles from "./Header.module.css";
<<<<<<< HEAD
import Logoutbutton from "./LogoutButton";

const Header = () => {
    return(
        <header>
        <nav id={styles.topbar}>
            <div id={styles.topimg}>
                <img src="/images/porta-white.png" width="288px" height="79px" alt="PORTA"></img>
            </div>
            <Logoutbutton />
        </nav>
        </header>
    );
}

export default Header;
=======
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { AppearContext } from "../App";

const Header = () => {
  const { isAuthenticated, logout } = useAuth0();
  const { appear, setAppear } = useContext(AppearContext);
  return (
    <header class={styles.header}>
      <nav class={styles.navigation}>
        <img
          class={styles.menu}
          src="/icons/menu-white.svg"
          alt="menu"
          onClick={() => setAppear(!appear)}
        ></img>
        <Link to="/">
          <img
            class={styles.logo}
            src="/images/porta-white.png"
            alt="porta-white"
          ></img>
        </Link>
        <Link
          to="/"
          class={styles.login_out}
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          {isAuthenticated ? "LOG OUT" : "LOG IN / SIGN UP"}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
>>>>>>> 648f7684a54682457984eec95bb7ea4db6a161cc
