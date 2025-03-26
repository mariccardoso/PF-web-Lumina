import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <img
          className={styles.logo}
          src={"logo_principal.svg"}
          alt="Logo"
          width={200}
          height={100}
        />

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
      <div className={styles.footerInfo}>
        <p>Contato:luminabloom@gmail.com</p>
        <p>Telefone: (19) 99379-4962 </p>
        <p>Instagram: @lumi.na bloom</p>
        <p>Faceboook: LuminaBloom</p>
      </div>
    </footer>
  );
};

export default Footer;
