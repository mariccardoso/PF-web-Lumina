import styles from "./header.module.css";
import {Search} from 'lucide-react'

const Header = ({navItens = [
  { label: "Início", href: "/", active: true },
  { label: "Dicas", href: "/feed" },
  { label: "Curiosidades", href: "/curiosidades" },
  { label: "Contato", href: "/curiosidades" },
  { label: "Login", href: "/login" },
]}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./mainLogo.png" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        {navItens.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`${styles.navItem} ${item.active ? styles.active : ""}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className={styles.search}>
        <input type="text" placeholder="Pesquisar..." />
        <button type="submit"><Search size={20} color="#3574bb" strokeWidth={1} /></button>
      </div>
    </header>
  );
};

export default Header;
