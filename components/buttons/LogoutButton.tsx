import styles from "./LogoutButton.module.scss";
import Link from "next/link";

const LogoutButton = () => {
  return (
    <Link href="/api/auth/logout">
      <a>
        <div className={styles.blackbutton}>LOGOUT</div>
      </a>
    </Link>
  );
};

export default LogoutButton;
