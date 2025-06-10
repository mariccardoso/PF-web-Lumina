"use client"
import styles from "./perfil.module.css";
import Cookies from 'js-cookie';
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

  return (
    <div className={styles.container}>
      {/* <Header /> */}
    <div className={styles.mainContent}>
    <h1 className={styles.title}>Meu Perfil</h1>
    {user ? (
      <div className={styles.profileBox}>
        <div className={styles.profileIcon}>
          {/* SVG de ícone de usuário */}
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" fill="#6366f1"/>
            <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" fill="#6366f1"/>
          </svg>
        </div>
        {user.name && <p><strong>Nome:</strong> {user.name}</p>}
        {user.email && <p><strong>Email:</strong> {user.email}</p>}
        {/* Adicione mais dados do usuário aqui */}
        <button onClick={handleLogout} className={styles.button}>Sair</button>
      </div>
    ) : (
      <p>Carregando...</p>
    )}
  </div>
    <Footer />
  </div>
  );
}
