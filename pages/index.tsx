import Head from "next/head";
import Header from "../components/Header/Header";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <div>
        <main>
          <Header/>
          <section></section>
        </main>
      </div>
    </div>
  );
}
