import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Post.module.css";

const endpoint = "localhost:3010/post/";

const Page = () => {
  const params = useParams();
  const [id, setId] = useState(params.id);
  const [post, setPost] = useState({});
  const [file, setFile] = useState("https://placehold.jp/710x415.png");
  const [title, setTitle] = useState("default");
  const [body, setBody] = useState("default");

  useEffect(() => {
    fetch(endpoint + id)
      .then((res) => setPost(res.json()))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main>
      <div class={styles.container}>
        <div class={styles.control}>
          <img class={styles.menu} src="/icons/menu-black.svg" alt="menu"></img>
          <input class={styles.update} type="button" value="UPDATE" />
        </div>
        <img class={styles.photo} src={file} alt="something"></img>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
        ></input>
        <form>
          <label class={styles.label} for="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
        <form>
          <label class={styles.label} for="body">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </form>
      </div>
    </main>
  );
};

export default Page;
