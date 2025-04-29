import CardAboutUs from "@/components/cardAboutUs";
import styles from "./sobrenos.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const Sobrenos = () => {
<<<<<<< HEAD
  const navItens = [
    { label: "Início", href: "/", active: true },
    { label: "Dicas", href: "/feed", active: false },
    { label: "Curiosidades", href: "/curiosidades", active: false },
    { label: "Contato", href: "/curiosidades", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: true},
    { label: "Maquiagens", href: "/maquiagem", active: false },
    { label: "Login", href: "/login", active: false },
  ];
=======
>>>>>>> d93160300d1a885173eeb120351d1acf9f83d831

  return (
    <div className={styles.container}>
      <Header />
      <p className={styles.title}>Seja bem-vinda ao nosso mundo</p>
      <p className={styles.description}>
        A Lumina nasceu da amizade, da paixão por beleza e do desejo de inspirar
        outras pessoas a se sentirem ainda mais confiantes e radiantes. Somos
        cinco meninas, unidas por sonhos, makes e muitas conversas cheias de
        brilho — e foi assim que criamos esse espaço.
      </p>
      <p className={styles.description}>
        Nossa equipe é formada por uma Product Owner, uma Scrum Master e três
        desenvolvedoras — mulheres que acreditam no poder da tecnologia, da
        criatividade e da beleza para transformar ideias em experiências únicas.
        Mais do que um blog, a Lumina é um reflexo de tudo o que acreditamos:
        beleza é expressão, é cuidado, é liberdade. Aqui, cada dica, resenha e
        descoberta vem do coração, pensada com carinho pra iluminar o seu.
      </p>

      <p className={styles.subtitle}>Conheça nossa equipe Lumina</p>
      <CardAboutUs />
      <Footer />
    </div>
  );
};

export default Sobrenos;
