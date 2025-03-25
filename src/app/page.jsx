import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import TopHeader from "./components/topHeader";
import Introduction from "./components/introduction";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <Header />
    
        <Introduction /> 


        <Footer />
      </div>
    </>
  );
}