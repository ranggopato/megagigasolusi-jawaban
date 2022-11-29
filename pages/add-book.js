import Head from "next/head";
import Image from "next/image";
import AddBook from "../components/AddBook";
import styles from "../styles/Home.module.css";

export default function addbook() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AddBook />
    </div>
  );
}
