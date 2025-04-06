import styles from "./footer.module.css";
import{ Instagram, Linkedin, Github, Facebook } from 'lucide-react'


const Footer = ( {navItens = [
  { label: "Início", href: "/"},
  { label: "Dicas", href: "/feed" },
  { label: "Curiosidades", href: "/curiosidades" },
  { label: "Contato", href: "/curiosidades" },
  { label: "Login", href: "/login" },
]}) => { 
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <img src="./mainLogo.png" alt="Logo" />
        </div>

        <div className={styles.footerNavContainer}>
          <div className={styles.footerNavSection}>
            <h3>Navegação</h3>
            <nav className={styles.footerNav}>
              {navItens.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`${styles.navItem} ${
                    item.active ? styles.active : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.footerNavSection}>
            <h3>Contato</h3>
            <nav className={styles.footerNav}>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Linkedin</a>
              <a href="#">Github</a>
            </nav>
          </div>

          <div className={styles.footerNavSection}>
            <h3>Empresa</h3>
            <nav className={styles.footerNav}>
              <a href="#">Sobre nós</a>
              <a href="#">Carreiras</a>
              <a href="#">Blog</a>
              <a href="#">Contato</a>
            </nav>
          </div>

          <div className={styles.footerNavSection}>
            <h3>Legal</h3>
            <nav className={styles.footerNav}>
              <a href="#">Termos de Uso</a>
              <a href="#">Privacidade</a>
              <a href="#">Cookies</a>
              <a href="#">LGPD</a>
            </nav>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 Lumina Blog - Todos os direitos reservados</p>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
          <Instagram size={20} color="#3574bb" strokeWidth={1.25}  />
          </a>
          <a href="#" className={styles.socialLink}>
          <Linkedin size={20} color="#3574bb" strokeWidth={1.25} className={styles.icon} />
          </a>
          <a href="#" className={styles.socialLink}>
          <Github size={20} color="#3574bb" strokeWidth={1.25} className={styles.icon} />
          </a>
          <a href="#" className={styles.socialLink}>
          <Facebook size={20} color="#3574bb" strokeWidth={1.25} className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
