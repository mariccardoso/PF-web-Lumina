'use client';
import { useState } from "react";
import api from "@/app/services/api";
import styles from "./postForm.module.css";

export default function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title || !content || !imageUrl) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    setLoading(true);
    const payload = { title, content, imageUrl };

    try {
      // Tenta criar post usando o serviço autenticado
      const response = await api.post("/post", payload);
      alert("Post publicado com sucesso!");
      setTitle("");
      setContent("");
      setImageUrl("");
      if (onPostCreated) onPostCreated({ success: true, data: response.data });
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Você precisa estar logado para criar um post.");
      } else {
        const message = err.response?.data?.message || "Erro ao publicar.";
        setError(message);
      }
      if (onPostCreated) onPostCreated({ success: false, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Título da postagem"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className={styles.textarea}
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        className={styles.input}
        type="text"
        placeholder="URL da imagem (ex: https://...)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? "Publicando..." : "Publicar"}
      </button>
    </form>
  );
}
