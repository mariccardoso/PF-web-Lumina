"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PostFeed from "@/components/postFeed";
import PostForm from "@/components/postForm";
import styles from "./curiosidades.module.css";
import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function Feed() {
    const [refresh, setRefresh] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [filter, setFilter] = useState("");
    const [popup, setPopup] = useState({ show: false, message: "", type: "" });

    const handlePostCreated = (result) => {
        setRefresh((r) => !r);
        setShowForm(false);
        setPopup({
            show: true,
            message: result?.message || (result?.success ? "Postagem criada!" : "Erro ao criar postagem."),
            type: result?.success ? "success" : "error",
        });
        setTimeout(() => setPopup({ show: false, message: "", type: "" }), 2500);
    };

    const navItens = [
        { label: "Início", href: "/", active: false },
        // { label: "Dicas", href: "/feed", active: false },
        { label: "Feed", href: "/Feed", active: true },
        { label: "Contato", href: "/contato", active: false },
        { label: "Sobre Nós", href: "/sobrenos", active: false },
        { label: "Login", href: "/login", active: false },
    ];

    return (
        <div className={styles.container}>
            <Header navItens={navItens} />
            <main className={styles.mainContent}>
                <div className={styles.filterBar}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                        className={styles.filterInput}
                        type="text"
                        placeholder="Filtrar por título..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <button
                        className={styles.addButton}
                        title="Nova postagem"
                        onClick={() => setShowForm(true)}
                    >
                        <FaPlus /> Nova Postagem
                    </button>
                </div>
                <PostFeed key={refresh} filter={filter} />
                {showForm && (
                    <div className={styles.formOverlay}>
                        <PostForm onPostCreated={handlePostCreated} />
                    </div>
                )}
                {showForm && (
                    <div
                        className={styles.overlayBg}
                        onClick={() => setShowForm(false)}
                    />
                )}
                {popup.show && (
                    <div className={`${styles.popupMsg} ${styles[popup.type]}`}>
                        {popup.message}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}