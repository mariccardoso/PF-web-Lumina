"use client"
import styles from "./perfil.module.css";
import Cookies from 'js-cookie';
import { Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { jwtDecode } from "jwt-decode";

export default function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
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

  function handleLogout() {
    Cookies.remove('token');
    window.location.href = '/login';
  }

  const navItens = [
    { label: "Início", href: "/", active: false },
    { label: "Feed", href: "/Feed", active: false },
    { label: "Contato", href: "/contato", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: false },
    { label: "Login", href: "/login", active: false },
    { label: "Perfil", href: "/perfil", active: true },
  ];

  return (
    <div className={styles.container}>
      <Header navItens={navItens} />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Meu Perfil</h1>
        <div className={styles.profileWrapper}>
          {user ? (
            <div className={styles.profileBox}>
              <div className={styles.profileIcon}>
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#3574bb" />
                  <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" fill="#3574bb" />
                </svg>
              </div>
              <div className={styles.profileInfo}>
                {user.name && (
                  <div className={styles.profileField}>
                    <User className={styles.profileFieldIcon} />
                    <span className={styles.profileFieldLabel}>Nome:</span>
                    <span>{user.name}</span>
                  </div>
                )}
                {user.email && (
                  <div className={styles.profileField}>
                    <Mail className={styles.profileFieldIcon} />
                    <span className={styles.profileFieldLabel}>Email:</span>
                    <span>{user.email}</span>
                  </div>
                )}
              </div>
              <button onClick={handleLogout} className={styles.button}>Sair</button>
            </div>
          ) : (
            <div className={styles.loadingBox}>
              <div className={styles.skeletonIcon}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonText}></div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}