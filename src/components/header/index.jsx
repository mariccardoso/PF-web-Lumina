"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import styles from "./header.module.css";

const Header = ({ navItens = [] }) => {
  // ✅ Valor padrão adicionado
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLogged(!!token);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  // ✅ Verificação adicional para garantir que navItens é um array
  const nav = (navItens || []).filter((item) => {
    if (item.label === "Login" && isLogged) return false;
    return true;
  });

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="./mainLogo.png" alt="Logo" style={{ cursor: "pointer" }} />
        </Link>
      </div>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X size={30} color="#3574bb" />
        ) : (
          <Menu size={30} color="#3574bb" />
        )}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        {nav.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`${styles.navItem} ${item.active ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        {isLogged && (
          <a href="/perfil" className={styles.navItem}>
            {user && user.name
              ? user.name
              : user && user.email
              ? user.email
              : "Perfil"}
          </a>
        )}
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
