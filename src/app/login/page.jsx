'use client';
import Header from "@/components/header";
import axios from "axios";
import { useState } from "react";
import Footer from "@/components/footer";
import styles from "./login.module.css";
import Cookies from 'js-cookie';

export default function Login() {
    const url = "https://lumina.coolify.fps92.dev/auth/login";

    const navItens = [
        { label: "Início", href: "/", active: false },
        // { label: "Dicas", href: "/feed", active: false },
        { label: "Feed", href: "/Feed", active: false },
        { label: "Contato", href: "/contato", active: false },
        { label: "Sobre Nós", href: "/sobrenos", active: false },
        { label: "Login", href: "/login", active: true },
    ];

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post(url, { email, password });
            if (response.data && response.data.token) {
                Cookies.set('token', response.data.token, { expires: 7 });
                alert("Login realizado com sucesso!");
                window.location.href = "/Feed";
            }
        } catch (err) {
            setError("Falha no login. Verifique suas credenciais.");
            alert("Erro no login: " + (err.response?.data?.message || "Falha na conexão"));
        }
    }
    
    return (
        <div className={styles.container}>
           < img
      src="./assets/lirio.png" // ou o caminho correto da sua imagem
      alt="Lírio"
      className={styles.lirioBg}
      aria-hidden="true"
    />
            <Header navItens={navItens}/>
            <div className={styles.mainContent}>
                <h1 className={styles.title}>Faça login</h1>
                <form className={styles.formContainer} onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className={styles.errorMessage}>{error}</p>}
                    <button className={styles.button} type="submit">Entrar</button>
                    <p className={styles.registerText}>Não tem uma conta? <a href="/register" className={styles.registerLink}>Cadastre-se</a></p>
                </form>
            </div>
            <img
                src="/lirio.png"
                alt="Flor decorativa"
                className={styles.flowerbg}
            />
            <Footer />
        </div>
    );
}