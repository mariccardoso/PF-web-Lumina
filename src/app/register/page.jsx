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
    { label: "Feed", href: "/Feed", active: false },
    { label: "Contato", href: "/Feed", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: false},
    { label: "Login", href: "/login", active: true },
  ];

    const url = "https://lumina.coolify.fps92.dev/auth/register";

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
                    <p className={styles.registerText}>Já tem uma conta? <a href="/login" className={styles.registerLink}>Faça Login</a></p>
                    <p className={styles.registerText}>Ou registre-se com:</p>
                    <div className={styles.registerButtons}>
                        <div className={styles.registerButton}>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://agenciapnz.com/wp-content/uploads/Logo-Google-G.png" alt="Google" className={styles.socialIcon} />
                                Google
                            </a>
                        </div>
                        <div className={styles.registerButton}>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" className={styles.socialIcon} />
                                GitHub
                            </a>
                        </div>
                        <div className={styles.registerButton}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_zWgHI9wgg-AyGVJW0MYaXwunloH1-twsg&s" alt="Facebook" className={styles.socialIcon} />
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
                <img
                    src="/lirio.png"
                    alt="Flor decorativa"
                    className={styles.flowerbg}
                />
            </div>
            <Footer />
        </div>
    )
}