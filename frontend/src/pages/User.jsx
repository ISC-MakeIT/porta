import { useParams, Link } from "react-router-dom";
import styles from "./User.module.css";
import Header from "./Header.jsx";

// TODO: Headerコンポーネントをこの画面に追加する

const User = () => {
  let params = useParams();
  return (
    <>
      <Header />
      <main class={styles.main}>
        <div class={styles.left_container}>
          <div class={styles.control}>
            <img
              class={styles.menu}
              src="/icons/menu-black.svg"
              alt="menu"
            ></img>
            <Link to={`/edit/${params.user_id}`}>
              <img class={styles.edit} src="/icons/edit.svg" alt="edit"></img>
            </Link>
          </div>
          <div class={styles.profile}>
            <img
              class={styles.avatar}
              src="https://placehold.jp/216x216.png"
              alt="user"
            ></img>
            <h1>UserName</h1>
            <p>textt</p>
            <div class={styles.icons}>
              <img
                class={styles.icon}
                src="/icons/twitter.svg"
                alt="twitter"
              ></img>
              <img
                class={styles.icon}
                src="/icons/instagram.svg"
                alt="instagram"
              ></img>
            </div>
          </div>
        </div>
        <div class={styles.right_container}>
          <ul class={styles.posts}>
            <li class={styles.post}>
              <img src="https://placehold.jp/710x415.png" alt="something"></img>
              <h1>title</h1>
              <p>text</p>
            </li>
            <li class={styles.post}>
              <img src="https://placehold.jp/710x415.png" alt="something"></img>
              <h1>title</h1>
              <p>text</p>
            </li>
            <li class={styles.post}>
              <img src="https://placehold.jp/710x415.png" alt="something"></img>
              <h1>title</h1>
              <p>text</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default User;
