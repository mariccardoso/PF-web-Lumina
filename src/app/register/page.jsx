'use client';
import Header from "@/components/header";
import axios from "axios";
import { useState } from "react";
import Footer from "@/components/footer";
import styles from "./register.module.css";

export default function Register() {

    const navItens = [
    { label: "Início", href: "/", active: false },
    { label: "Dicas", href: "/feed", active: false },
    { label: "Curiosidades", href: "/curiosidades", active: false },
    { label: "Contato", href: "/curiosidades", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: false},
    { label: "Login", href: "/login", active: true },
  ];

    const url = "http://localhost:5000/auth/register";

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleRegister() {
        try {
            const response = await axios.post(url, {name, email, password });
            
            if (response.data) {
                // Register foi bem-sucedido
                alert("Register realizado com sucesso!");
                // Aqui você pode redirecionar o usuário para outra página
                // window.location.href = "/dashboard";
            }
        } catch (err) {
            console.error("Erro no register:", err);
            setError("Falha no register. Verifique suas credenciais.");
            alert("Erro no register: " + (err.response?.data?.message || "Falha na conexão"));
        }
    }
    
    return (
        <div className={styles.container}>
            <Header navItens={navItens}/>
            <div className={styles.mainContent}>
                <h1 className={styles.title}>Criar Conta</h1>
                <div className={styles.formContainer}>
                    <input
                        type="text"
                        placeholder="Nome"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className={styles.errorMessage}>{error}</p>}
                    <button className={styles.button} onClick={handleRegister}>Entrar</button>
                    <p className={styles.registerText}>Não tem uma conta? <a href="/register" className={styles.registerLink}>Cadastre-se</a></p>
                </div>
            </div>
        </div>
    )
}