import { useEffect, useContext } from "react";
import Layout from "../components/Layout";
import styles from "./user.module.scss";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useUser } from "@auth0/nextjs-auth0";
import { ShowStateContext } from "./_app";
import Header from "../components/buttons/Header";

const User = () => {
  const { user, error, isLoading } = useUser();
  const { show, setShow } = useContext(ShowStateContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user)
    return (
      <Layout>
        {show || <Header />}
        <div className={styles.left_container}>
          <div className={styles.control}>
            <Image
              className={styles.menu}
              src="/icons/menu-black.svg"
              alt="menu"
              width={50}
              height={50}
              onClick={() => setShow(!show)}
            ></Image>
            <Link href={`/edit/${user?.sub}`}>
              <a>
                <Image
                  className={styles.edit}
                  src="/icons/edit.svg"
                  width={50}
                  height={50}
                  alt="edit"
                ></Image>
              </a>
            </Link>
          </div>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <Image
                src={user.picture || "https://placehold.jp/216x216.png"}
                width={216}
                height={216}
                alt="user"
              ></Image>
            </div>
            {/* TODO: データベースからのユーザ情報を表示させる
            <h1>{user.name || "noname"}</h1>
            <p>{user.body || "none"}</p> */}
            <div className={styles.icons}>
              <Image
                className={styles.icon}
                src="/icons/twitter.svg"
                width={30}
                height={30}
                alt="twitter"
              ></Image>
              <Image
                className={styles.icon}
                src="/icons/instagram.svg"
                width={30}
                height={30}
                alt="instagram"
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.right_container}>
          <ul className={styles.posts}>
            <li className={styles.post}>
              <Image
                src="https://placehold.jp/710x415.png"
                width={710}
                height={415}
                alt="something"
              ></Image>
              <h1>title</h1>
              <p>text</p>
            </li>
            {/* {postsLi} */}
          </ul>
        </div>
      </Layout>
    );
  return;
};

export default User;
