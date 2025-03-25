import styles from "./footer.module.css";

const Footer = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <p className={styles.contact}>Contato:luminabloom@gmail.com</p>
        <p className={styles.contact}>Telefone: (19) 99379-4962 </p>
        <img
          className={styles.logo}
          src={"logo_principal.svg"}
          alt="Logo"
          width={200}
          height={100}
        />
        <p>Instagram: @lumi.na bloom</p>
        <p>Faceboook: LuminaBloom</p>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/about">Dicas</a>
          </li>
          <li>
            <a href="/contact">Podcast</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Footer;
