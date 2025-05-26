import { useState } from "react";
import styles from "./postForm.module.css";

const API_URL = "http://localhost:5000/post";

export default function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      setTitle("");
      setContent("");
      setImage(null);
      setPreview(null);
      setLoading(false);
      if (onPostCreated) onPostCreated({ success: res.ok, message: result?.message });
    } catch {
      setLoading(false);
      if (onPostCreated) onPostCreated({ success: false, message: "Erro ao criar postagem." });
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
      <label className={styles.imageLabel}>
        {preview ? (
          <img src={preview} alt="Prévia" className={styles.imagePreview} />
        ) : (
          "Adicionar imagem"
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </label>
      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? "Publicando..." : "Publicar"}
      </button>
    </form>
  );
}