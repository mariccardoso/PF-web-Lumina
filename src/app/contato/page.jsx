"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContatoPage() {
    const navItens = [
        { label: "Início", href: "/", active: false },
        // { label: "Dicas", href: "/feed", active: false },
        { label: "Feed", href: "/Feed", active: false },
        { label: "Contato", href: "/contato", active: true },
        { label: "Sobre Nós", href: "/sobrenos", active: false },
        { label: "Login", href: "/login", active: false },
    ];
    const [form, setForm] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");
        // Simulação de envio (substitua por integração real se necessário)
        await new Promise((res) => setTimeout(res, 1000));
        setStatus("Mensagem enviada com sucesso!");
        setForm({ nome: "", email: "", mensagem: "" });
    };    return (
        <div className={styles.container}>
            <Header navItens={navItens} />
            <div className={styles.mainContent}>
                <h1 className={styles.title}>Entre em Contato</h1>
                
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div>
                        <label className={styles.label}>Nome</label>
                        <input
                            type="text"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Seu nome"
                        />
                    </div>
                    <div>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Seu email"
                        />
                    </div>
                    <div>
                        <label className={styles.label}>Mensagem</label>
                        <textarea
                            name="mensagem"
                            value={form.mensagem}
                            onChange={handleChange}
                            required
                            className={styles.textarea}
                            placeholder="Escreva sua mensagem aqui"
                        />
                    </div>
                    <button type="submit" className={styles.button}>
                        Enviar Mensagem
                    </button>
                    {status && <p className={styles.status}>{status}</p>}
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