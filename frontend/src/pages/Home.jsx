import styles from "./Home.module.css";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  return (
    <>
      <main>
        <div id={styles.img}>
          <img
            src="/images/porta-black.png"
            width={710}
            height={171}
            alt="PORTA"
          />
        </div>
        <div id={styles.progress}>
          <LoginButton />
        </div>
      </main>
    </>
  );
};

export default Home;
