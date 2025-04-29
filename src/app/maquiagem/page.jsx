import styles from "./maquiagem.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainCardSection from "@/components/mainCardSection";
import VideoSection from "@/components/videoSection";

const Maquiagem = () => {
  const navItens = [
    { label: "Início", href: "/", active: false },
    { label: "Dicas", href: "/feed", active: false },
    { label: "Curiosidades", href: "/curiosidades", active: false },
    { label: "Contato", href: "/curiosidades", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: false },
    { label: "Maquiagens", href: "/maquiagem", active: true },
    { label: "Login", href: "/login", active: false },
  ];

  return (
    <div className={styles.container}>
      <Header logo="MemeVerse" navItens={navItens} />
      <MainCardSection
        mainCardTitle={"Descubra o poder de uma boa maquiagem."}
        mainCardDescription={
          "Bem-vindo à nossa seção do Lumina Maquiagens!"
        }
        mainCardImage={
          "https://dicas.lovestoremakeup.com.br/wp-content/uploads/2023/03/make-up.jpg"
        }
        mainCardImageAlt={"Pinguins"}
        mainCardButton={"learn more"}
      />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Maquiagem;
