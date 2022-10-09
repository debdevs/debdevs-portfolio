import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ButtonRow } from '../components/UI/atoms/ButtonRow/ButtonRow';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.home_header}>
        <header_info_box className={styles.header_info_box}>
          <h1 className={styles.h1}>Hello There,</h1>
          <h2 className={styles.h2}>
            I'm <span className={styles.span}>Deborah</span>
          </h2>
          <p className={styles.p}>
            A frontend developer with a passion for visuals
          </p>
        </header_info_box>
      </section>
      <ButtonRow />
    </div>
  );
}
