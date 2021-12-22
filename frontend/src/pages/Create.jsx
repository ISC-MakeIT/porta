import Header from "../components/Header";
import { useState, useContext } from "react";
import { AppearContext } from "../App";
import { useParams } from "react-router-dom";
import styles from "./Create.module.css";

const Create = () => {
  const { appear, setAppear } = useContext(AppearContext);
  const params = useParams();
  const [id, setId] = useState(params.id);
  const [post, setPost] = useState({});
  const [file, setFile] = useState("https://placehold.jp/710x415.png");
  const [title, setTitle] = useState("default");
  const [body, setBody] = useState("default");
  return (
    <>
      {appear && <Header />}
      <main>
        <div class={styles.container}>
          <div class={styles.control}>
            <img
              class={styles.menu}
              src="/icons/menu-black.svg"
              alt="menu"
              onClick={() => setAppear(!appear)}
            ></img>
            <input class={styles.create} type="button" value="CREATE" />
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
    </>
  );
};

export default Create;
