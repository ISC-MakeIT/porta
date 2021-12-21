import styles from "./Home.module.css";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import IconPORTA from "../IconPORTA.png";

const Home = () => {
  return (
    <>
      <div id={styles.img}>
        <img src={IconPORTA} width={710} height={171} alt="PORTA" />
      </div>
      <div id={styles.progress}>
        <LoginButton />
      </div>
      <LogoutButton />
    </>
  );
};

export default Home;
