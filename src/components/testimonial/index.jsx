import styles from "./testimonial.module.css";

const testimonials = [
  {
    name: "Ana Paula",
    text: "O blog Lumina me ajudou a transformar minha rotina de autocuidado. Recomendo muito!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Marcos Silva",
    text: "Dicas práticas e Feed incríveis. Meu cabelo nunca esteve tão saudável!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Juliana Costa",
    text: "Adoro as recomendações de skincare. O conteúdo é sempre atualizado e confiável.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>O que dizem sobre o Lumina</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((t, i) => (
          <div className={styles.testimonialCard} key={i}>
            <img src={t.avatar} alt={t.name} className={styles.avatar} />
            <p className={styles.text}>"{t.text}"</p>
            <span className={styles.name}>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}