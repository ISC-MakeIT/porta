import styles from "./LoginButton.module.scss";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/api/auth/login">
      <a>
        <div className={styles.blackbutton}>LOG IN / SIGN UP</div>
      </a>
    </Link>
  );
};

export default LoginButton;
