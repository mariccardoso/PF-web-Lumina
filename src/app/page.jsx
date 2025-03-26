import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import TopHeader from "./components/topHeader";
import Introduction from "./components/introduction";
import Footer from "./components/footer";

export default function Home() {
  return (
    <section className={styles.container}>
      <TopHeader />
      <Header />
      <Introduction />

      <div className={styles.beautyContainer}>
      <Image className={styles.imgContent} src="/beautySection.png" alt="três mulheres" width={700} height={650} />
        <div className={styles.beautyContent}>
          <h2>Colocar título aqui</h2>
          <p>Colocar descrição curta aqui</p>
          <div className={styles.beautyCards}>
            <div className={styles.beautyCard}>
            <Image src="/cabelo.png" alt="icon de cabelo" width={110} height={110} />
              <h3 className={styles.textBeauty}>Cabelo</h3>
            </div>

            <div className={styles.beautyCard}>
            <Image src="/maquiagem.png" alt="icon de um rosto com maquiagem"width={110} height={110} />
              <h3 className={styles.textBeauty}>Maquiagem</h3>
            </div>

            <div className={styles.beautyCard}>
            <Image src="/skincare.png" alt="icon de um pote de creme" width={110} height={110} />              
            <h3  className={styles.textBeauty}>Skincare</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};