'use client';
import Header from "@/components/header";
import axios from "axios";
import { useState } from "react";
import Footer from "@/components/footer";
import styles from "./login.module.css";

export default function Login() {
    const url = "http://localhost:4000/auth/register";

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin() {
        try {
            const response = await axios.post(url, {name, email, password });
            
            if (response.data) {
                // Login foi bem-sucedido
                alert("Login realizado com sucesso!");
                // Aqui você pode redirecionar o usuário para outra página
                // window.location.href = "/dashboard";
            }
        } catch (err) {
            console.error("Erro no login:", err);
            setError("Falha no login. Verifique suas credenciais.");
            alert("Erro no login: " + (err.response?.data?.message || "Falha na conexão"));
        }
    }
    
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.mainContent}>
                <h1 className={styles.title}> Faça login</h1>
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
                    <button className={styles.button} onClick={handleLogin}>Entrar</button>
                    <p className={styles.registerText}>Não tem uma conta? <a href="/register" className={styles.registerLink}>Cadastre-se</a></p>
                </div>
            </div>
        </div>
    )
}