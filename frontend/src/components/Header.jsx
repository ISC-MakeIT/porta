import styles from "./Header.module.css";
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