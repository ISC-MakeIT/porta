import Header from "../components/Header";
import { useState, useContext } from "react";
import { AppearContext } from "../App";
import { useParams } from "react-router-dom";
import styles from "./Create.module.css";
import AWS from "aws-sdk";

const ACCESS_ID_KEY = process.env.REACT_APP_ACCESS_ID_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

const s3 = new AWS.S3({
  accessKeyId: ACCESS_ID_KEY,
  secretAccessKey: SECRET_KEY,
  endpoint: "http://localhost:9000",
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

const Create = () => {
  const { appear, setAppear } = useContext(AppearContext);
  const params = useParams();
  const [id, setId] = useState(params.id);
  const [post, setPost] = useState({});
  const [file, setFile] = useState("https://placehold.jp/710x415.png");
  const [title, setTitle] = useState("default");
  const [body, setBody] = useState("default");

  const submit = (e) => {
    e.preventDefault();
    s3.putObject(
      {
        Bucket: "test",
        Key: file.name,
        Body: file,
        ACL: "public-read",
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully uploaded data to minio");
        }
      }
    );

    if (typeof file !== "string") {
      fetch("http://localhost:3010/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: params.user_id,
          picture: file.name,
          title: title,
          body: body,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setPost(json);
        })
        .catch((err) => console.log(err));
    }
  };
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
            <input
              class={styles.create}
              type="button"
              value="CREATE"
              onClick={submit}
            />
          </div>
          <img
            class={styles.photo}
            src={typeof file === "string" ? file : URL.createObjectURL(file)}
            alt="something"
          ></img>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
          <form>
            <label class={styles.label} for="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
                console.log(title);
              }}
            />
            {title}
            <label class={styles.label} for="body">
              Body
            </label>
            <textarea
              id="body"
              placeholder="Body"
              onChange={(e) => {
                setBody(e.target.value);
                console.log(body);
              }}
            />
            {body}
          </form>
        </div>
      </main>
    </>
  );
};

export default Create;
