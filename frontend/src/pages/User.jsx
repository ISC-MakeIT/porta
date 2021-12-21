import { useParams, Link } from "react-router-dom";
import styles from "./User.module.css";
import Header from "../components/Header.jsx";
import { useContext } from "react";
import { AppearContext } from "../App";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const User = () => {
  const { appear, setAppear } = useContext(AppearContext);
  const { isAuthenticated } = useAuth0();
  let params = useParams();
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  const postsLi = posts.map((post) => {
    return (
      <li class={styles.post}>
        <img
          src={post.picture || "https://placehold.jp/710x415.png"}
          alt="something"
        ></img>
        <h1>{post.title || "none"}</h1>
        <p>{post.text || "none"}</p>
      </li>
    );
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetch(`http://localhost:3010/user/${params.user_id}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setProfile(json);
        })
        .catch((err) => console.log(err));
      fetch(`http://localhost:3010/posts/${params.user_id}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setPosts(json);
        });
    }
  }, [isAuthenticated, params]);

  return (
    <>
      {appear && <Header />}
      <main class={styles.main}>
        <div class={styles.left_container}>
          <div class={styles.control}>
            <img
              class={styles.menu}
              src="/icons/menu-black.svg"
              alt="menu"
              onClick={() => setAppear(!appear)}
            ></img>
            <Link to={`/edit/${params.user_id}`}>
              <img class={styles.edit} src="/icons/edit.svg" alt="edit"></img>
            </Link>
          </div>
          <div class={styles.profile}>
            <img class={styles.avatar} src={profile.picture} alt="user"></img>
            <h1>{profile.name || "noname"}</h1>
            <p>{profile.body || "none"}</p>
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
            {/* <li class={styles.post}>
              <img src="https://placehold.jp/710x415.png" alt="something"></img>
              <h1>title</h1>
              <p>text</p>
            </li> */}
            {postsLi ? "新しく記事を作ってみましょう" : postsLi}
          </ul>
        </div>
      </main>
    </>
  );
};

export default User;
