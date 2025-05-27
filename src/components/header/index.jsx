'use client';
import { useState } from "react";
import styles from "./header.module.css";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = ({navItens}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
         <Link href="/">
          <img src="./mainLogo.png" alt="Logo" style={{ cursor: "pointer" }} />
        </Link>
      </div>

      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} color="#3574bb" /> : <Menu size={30} color="#3574bb" />}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        {navItens.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`${styles.navItem} ${item.active ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className={styles.search}>
        <input type="text" placeholder="Pesquisar..." />
        <button type="submit">
          <Search size={20} color="#3574bb" strokeWidth={1} />
        </button>
      </div>
    </header>
  );
};

export default Header;
