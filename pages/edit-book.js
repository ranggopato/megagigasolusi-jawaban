import Head from "next/head";
import Image from "next/image";
import EditBook from "../components/EditBook";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function addbook() {
  const router = useRouter();
  const query = router.query;
  const object = JSON.parse(query.object);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EditBook book={object} />
    </div>
  );
}
