import { useParams, Link } from "react-router-dom";
import styles from "./Edit.module.css";
import { useState, useEffect, useContext, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppearContext, ProfileContext, PostsContext } from "../App";
import Header from "../components/Header";

const Edit = () => {
  const { isAuthenticated } = useAuth0();
  const { appear, setAppear } = useContext(AppearContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const { posts, setPosts } = useContext(PostsContext);

  const params = useParams();

  useEffect(() => {
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
  }, [params.user_id, setProfile, setPosts]);

  const postsLi = posts.map((post) => {
    return (
      <Link to={`/posts/${post.id}`}>
        <li class={styles.post}>
          <img
            src={post.picture || "https://placehold.jp/710x415.png"}
            alt="something"
          ></img>
          <h1>{post.title || "none"}</h1>
          <p>{post.title || "none"}</p>
        </li>
      </Link>
    );
  });

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
            <Link to={`/user/${params.user_id}`}>
              <img
                class={styles.play}
                src="/icons/preview.svg"
                alt="preview"
              ></img>
            </Link>
          </div>
          <div class={styles.profile}>
            <img
              class={styles.avatar}
              src={profile.picture || "https://placehold.jp/216x216.png"}
              alt="user"
            ></img>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setProfile({
                  ...profile,
                  picture: URL.createObjectURL(e.target.files[0]),
                })
              }
            ></input>
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              value={profile.name || "noname"}
              onChange={(e) => {
                const name = e.target.value;
                setProfile({ ...profile, name });
              }}
            />
            <label for="body">Body</label>
            <textarea
              id="body"
              value={profile.body || "none"}
              onChange={(e) => {
                const body = e.target.value;
                setProfile({ ...profile, body });
              }}
            />
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
            {/* <Link to="/post/1">
              <li class={styles.post}>
                <img
                  src="https://placehold.jp/710x415.png"
                  alt="something"
                ></img>
                <h1>title</h1>
                <p>text</p>
              </li>
            </Link> */}
            {postsLi ? "新しく記事を作ってみましょう" : postsLi}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Edit;
