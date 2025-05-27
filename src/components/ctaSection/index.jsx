import styles from "./ctaSection.module.css";
import { FaDownload } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Baixe nosso Guia Completo de Autocuidado!</h2>
        <p className={styles.ctaText}>
          Descubra dicas exclusivas, rotinas e segredos para elevar seu bem-estar. É grátis!
        </p>
        <a
          href="/guia-autocuidado.pdf"
          className={styles.ctaButton}
          download
        >
          <FaDownload style={{ marginRight: 8 }} />
          Baixar agora
        </a>
      </div>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Guia de autocuidado"
        className={styles.ctaImage}
      />
    </section>
  );
}