import { useParams, Link } from "react-router-dom";
import styles from "./User.module.css";
import Header from "../components/Header.jsx";

import {useContext} from "react";
import { AppearContext, ProfileContext, PostsContext } from "../App";
import { useEffect } from "react";

const User = () => {
  const { appear, setAppear } = useContext(AppearContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const { posts, setPosts } = useContext(PostsContext);
  let params = useParams();


const postsLi = posts.map((post) => {
  console.log(post);
  return (
    <li class={styles.post}>
      <img
        class={styles.photo}
        src={"http://localhost:9000/test/" + post.picture}
        alt={post.picture}
      ></img>
      <h1>{post.title || "none"}</h1>
      <p>{post.body || "none"}</p>
    </li>
  );
});

useEffect(() => {
  fetch(`http://localhost:3010/user/${params.user_id}`)
    .then((res) => res.json())
    .then((json) => {
      // console.log(json);
      setProfile(json);
    })
    .catch((err) => console.log(err));
  fetch(`http://localhost:3010/posts/${params.user_id}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setPosts(json);
    });
}, [params.user_id, setProfile, setPosts]);

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

            <img class={styles.avatar} src="/images/prof.png" alt="user"></img>
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
            {postsLi}
          </ul>
        </div>
      </main>
    </>
  );
};

export default User;
