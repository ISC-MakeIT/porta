import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";
import { useUser } from "@auth0/nextjs-auth0";
import Profile from "../components/Profile";
import LoginButton from "../components/buttons/LoginButton";
import LogoutButton from "../components/buttons/LogoutButton";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );

  if (user) {
    router.push("/user");
    return null;
  }

  return (
    <Layout>
      <div id={styles.img}>
        <Image
          src="/images/porta-black.png"
          width={710}
          height={171}
          alt="PORTA"
        />
      </div>
      <div id={styles.progress}>
        <LoginButton />
      </div>
    </Layout>
  );
};

export default Home;
