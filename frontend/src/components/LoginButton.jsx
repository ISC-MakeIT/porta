import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button id={styles.blackbutton} onClick={() => loginWithRedirect()}>LOG IN / SIGN UP</button>;
};

export default LoginButton;
