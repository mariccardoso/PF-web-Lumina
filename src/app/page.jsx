import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import TopHeader from "./components/topHeader";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopHeader />
      <Header />
    </div>
  );
}
