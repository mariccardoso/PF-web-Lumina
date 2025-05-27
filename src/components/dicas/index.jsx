import styles from "./dicas.module.css";
import { FaLeaf, FaSmile, FaTint } from "react-icons/fa";

const tips = [
  {
    icon: <FaLeaf />,
    title: "Rotina Natural",
    text: "Prefira produtos naturais e evite excesso de química nos cabelos e pele.",
  },
  {
    icon: <FaSmile />,
    title: "Bem-estar",
    text: "Reserve um tempo para relaxar, meditar e cuidar da sua saúde mental.",
  },
  {
    icon: <FaTint />,
    title: "Hidratação",
    text: "Beba bastante água e mantenha a pele hidratada todos os dias.",
  },
];

export default function QuickTipsSection() {
  return (
    <section className={styles.tipsSection}>
      <h2 className={styles.title}>Dicas rápidas de autocuidado</h2>
      <div className={styles.tipsGrid}>
        {tips.map((tip, i) => (
          <div className={styles.tipCard} key={i}>
            <span className={styles.icon}>{tip.icon}</span>
            <h3 className={styles.tipTitle}>{tip.title}</h3>
            <p className={styles.tipText}>{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}