import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ShowStateContext } from "../../pages/_app";
import { useUser } from "@auth0/nextjs-auth0";

const Header = () => {
  const { show, setShow } = useContext(ShowStateContext);
  const { user, error, isLoading } = useUser();
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Image
          className={styles.menu}
          src="/icons/menu-white.svg"
          width={50}
          height={50}
          alt="menu"
          onClick={() => setShow(!show)}
        ></Image>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/images/porta-white.png"
              width={250}
              height={70}
              alt="porta-white"
            ></Image>
          </a>
        </Link>
        {user ? (
          <Link href="/api/auth/logout">
            <a className={styles.login_out}>
              <div>LOG OUT</div>
            </a>
          </Link>
        ) : (
          <Link href="/api/auth/login">
            <a className={styles.login_out}>
              <div>LOG IN / SIGN UP</div>
            </a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
