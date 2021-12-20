import styles from "./Header.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Information from "./HeaderImg/information.png";
import WIconPORTA from "./HeaderImg/WIconPORTA.png";
import Wprof from "./HeaderImg/Wprof.png";

const navbar = document.getElementById('cursolbar');
const btn = document.getElementsByClassName('menu_trigger');
const slide = document.getElementById('ghostbar');
const subbar = document.getElementById('subbar');

const Hamburger = () => {
    for(let i = 0; i < btn.length; i++) {
        if(btn[i].classList.length === 2){
            btn[i].classList -= 'active';
            navbar.classList -= 'locked_up';
            slide.classList -= 'locked_side';
        } else {
            btn[i].classList += 'active';
            navbar.classList += 'locked_up';
            slide.classList += 'locked_side';
        }
    }
}

const Iconclick = () => {
    if(subbar.classList.length === 1) {
        subbar.classList -= 'appear';
        navbar.classList -= 'locked_up';
    } else {
        subbar.classList += 'appear';
        navbar.classList += 'locked_up';
    }
}

const Header = () => {
    const { logout } = useAuth0();

    return(
        <header>
        <nav id={styles.cursolbar} onClick={() => Hamburger}>
                <button className={styles.menu_trigger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            <div id={styles.topimg}>
                <img src={WIconPORTA} width={288} height={79} alt="PORTA"/>
            </div>
            <div id={styles.triangle}></div>
            <div id={styles.tophref}>
                <button className={styles.imgbutton} id={styles.account} onClick={() => Iconclick}>
                    <img src={Wprof} width={70} height={70} alt="ACCOUNT"/>
                </button>
                <button className={styles.imgbutton}>
                    <img src={Information} width={70} height={70} alt="HELP"/>
                </button>
                <ul id={styles.subbar}>
                    <li id={styles.logout} onClick={() => function() {
                        if(window.confirm('Do you want to log out?')) {
                            logout({ returnTo: window.location.origin })
                        }
                    }}>Log Out</li>
                    <li>Rename Account</li>
                    <li>Format</li>
                </ul>
            </div>

            </nav>

            <nav id={styles.ghostbar}>
                <ul>
                    <li><a href="#">Choose File</a></li>
                    <li><a href="#">Overwrite</a></li>
                    <li><a href="#">Save File As</a></li>
                    <li><a href="#">Reboot</a></li>
                    <li><a href="#">Format</a></li>
                    <li><a href="#">Update</a></li>
                    <li><a href="#">Back to MYBOARD</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;