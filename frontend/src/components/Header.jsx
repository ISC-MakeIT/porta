import { Link } from "react-router-dom";
import styles from "./Header.module.css";
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
