import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./emDesenvolvimento.module.css";

export default function EmDesenvolvimento() {
  const navItens = [
    { label: "Início", href: "/", active: false },
    { label: "Dicas", href: "/feed", active: false },
    { label: "Feed", href: "/Feed", active: false },
    { label: "Contato", href: "/contato", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: false },
    { label: "Login", href: "/login", active: false },
  ];

  return (
    <div className={styles.container}>
      <Header navItens={navItens} />
      <main className={styles.main}>
        <div className={styles.iconArea}>
            <img src="/lirio.png" alt="Icone de construção" className={styles.icon} />
        </div>
        <h1 className={styles.title}>Página em desenvolvimento</h1>
        <p className={styles.text}>
          O conteúdo que você tentou acessar ainda está sendo preparado com carinho.<br />
          Em breve estará disponível para você!
        </p>
        <a href="/" className={styles.backButton}>
          Voltar para a página inicial
        </a>
      </main>
    </div>
  );
}