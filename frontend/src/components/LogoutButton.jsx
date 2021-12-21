import React from "react";
import styles from "./Header.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button className={styles.ghostbutton} onClick={() => logout({ returnTo: window.location.origin })}>
      LOG OUT
    </button>
  );
};

export default LogoutButton;
