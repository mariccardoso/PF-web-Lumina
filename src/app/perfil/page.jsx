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
      <Header navItens={[]} />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Meu Perfil</h1>
        {user ? (
          <div className={styles.profileBox}>
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
