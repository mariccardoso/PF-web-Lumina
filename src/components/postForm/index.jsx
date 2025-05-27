'use client';
import { useState } from "react";
import axios from "axios";
import styles from "./postForm.module.css";

const API_URL = "http://localhost:5000/post";

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

    const payload = { title, content, imageUrl };

    setLoading(true);

    try {
      const response = await axios.post(API_URL, payload, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Post publicado com sucesso!");
      setTitle("");
      setContent("");
      setImageUrl("");
      if (onPostCreated) onPostCreated({ success: true, data: response.data });

    } catch (err) {
      console.error("Erro ao criar post:", err);
      const message = err.response?.data?.message || "Erro ao publicar.";
      setError(message);
      if (onPostCreated) onPostCreated({ success: false, message });
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
