import { useParams, Link } from "react-router-dom";
import styles from "./Edit.module.css";
import { useState } from "react";

const Edit = () => {
  const params = useParams();
  const [avatar, setAvatar] = useState("https://placehold.jp/216x216.png");
  const [name, setName] = useState("hogename");
  const [body, setBody] = useState("texttext");
  const [posts, setPosts] = useState([{ name: "hoge", body: "text" }]);
  return (
    // <div>
    //   <h1>Edit {params.user_id}</h1>
    //   <Link to={`/user/${params.user_id}`}>User</Link>
    // </div>
    <main class={styles.main}>
      <div class={styles.left_container}>
        <div class={styles.control}>
          <img class={styles.menu} src="/icons/menu-black.svg" alt="menu"></img>
          <Link to={`/user/${params.user_id}`}>
            <img
              class={styles.play}
              src="/icons/preview.svg"
              alt="preview"
            ></img>
          </Link>
        </div>
        <div class={styles.profile}>
          <img class={styles.avatar} src={avatar} alt="user"></img>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
          ></input>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
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
          <Link to="/post/1">
            <li class={styles.post}>
              <img src="https://placehold.jp/710x415.png" alt="something"></img>
              <h1>title</h1>
              <p>text</p>
            </li>
          </Link>
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
  );
};

export default Edit;
