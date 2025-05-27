"use client";
import { useState } from "react";
import styles from "./newsletter.module.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Obrigado por se inscrever! Em breve você receberá novidades.");
    setEmail("");
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <section className={styles.newsletterSection}>
      <h2 className={styles.title}>Receba dicas exclusivas de autocuidado</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className={styles.button} type="submit">
          Assinar
        </button>
      </form>
      {msg && <div className={styles.msg}>{msg}</div>}
    </section>
  );
}